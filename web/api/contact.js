import { createClient } from "@supabase/supabase-js";

/**
 * Vercel Serverless: POST JSON { name, email, role, message? }
 * Env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (Vercel project settings)
 */
export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    res.statusCode = 503;
    res.end(JSON.stringify({ error: "Supabase not configured on server" }));
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: "Invalid JSON" }));
      return;
    }
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const role = (body.role || "").toString().trim();
  const message = (body.message || "").toString().trim() || null;

  if (!name || !email || !role) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Missing name, email, or role" }));
    return;
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    role,
    message,
  });

  if (error) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: error.message }));
    return;
  }

  res.statusCode = 200;
  res.end(JSON.stringify({ ok: true }));
}

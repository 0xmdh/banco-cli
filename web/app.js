(function () {
  var THEME_KEY = "banco-cli-theme";
  var SNIPPET_PREFIX = "banco-cli-snippet-";

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(value) {
    try {
      localStorage.setItem(THEME_KEY, value);
    } catch (e) {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    setStoredTheme(theme);
    var dayBtn = document.getElementById("theme-day");
    var nightBtn = document.getElementById("theme-night");
    if (dayBtn && nightBtn) {
      var isLight = theme === "light";
      dayBtn.setAttribute("aria-pressed", isLight ? "true" : "false");
      nightBtn.setAttribute("aria-pressed", isLight ? "false" : "true");
      dayBtn.classList.toggle("is-active", isLight);
      nightBtn.classList.toggle("is-active", !isLight);
    }
  }

  function initTheme() {
    applyTheme("light");
  }

  function isEsLocale() {
    var lang = document.documentElement.getAttribute("lang") || "";
    return lang.toLowerCase().indexOf("es") === 0;
  }

  function copyText(text, button) {
    function done() {
      if (!button) return;
      var prev = button.textContent;
      button.textContent = isEsLocale() ? "Copiado" : "Copied";
      button.disabled = true;
      setTimeout(function () {
        button.textContent = prev;
        button.disabled = false;
      }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fallback);
      return;
    }
    fallback();

    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        done();
      } catch (e) {
        if (button) button.textContent = isEsLocale() ? "No se pudo copiar" : "Copy failed";
      }
      document.body.removeChild(ta);
    }
  }

  function debounce(fn, ms) {
    var t;
    return function () {
      clearTimeout(t);
      var args = arguments;
      t = setTimeout(function () {
        fn.apply(null, args);
      }, ms);
    };
  }

  function initTerminals() {
    var bodies = document.querySelectorAll("[data-terminal-body]");
    bodies.forEach(function (el) {
      var id = el.getAttribute("data-terminal-body");
      if (!id) return;
      var key = SNIPPET_PREFIX + id;
      var saved = null;
      try {
        saved = localStorage.getItem(key);
      } catch (e) {}
      if (saved != null && saved !== "") {
        el.textContent = saved;
      }

      var save = debounce(function () {
        try {
          localStorage.setItem(key, el.textContent || "");
        } catch (e) {}
      }, 300);

      el.addEventListener("input", save);
      el.addEventListener("blur", function () {
        try {
          localStorage.setItem(key, el.textContent || "");
        } catch (e) {}
      });
    });

    document.querySelectorAll("[data-copy-for]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-copy-for");
        var el = document.querySelector('[data-terminal-body="' + id + '"]');
        if (!el) return;
        copyText(el.textContent || "", btn);
      });
    });

    document.querySelectorAll("[data-copy-text]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sel = btn.getAttribute("data-copy-text");
        var target = sel ? document.querySelector(sel) : null;
        var text = target ? target.textContent || "" : "";
        copyText(text, btn);
      });
    });
  }

  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var name = (fd.get("name") || "").toString().trim();
      var email = (fd.get("email") || "").toString().trim();
      var role = (fd.get("role") || "").toString().trim();
      var message = (fd.get("message") || "").toString().trim();
      var subjectLine =
        form.getAttribute("data-contact-subject") || "Banco CLI Agent Pilot";
      var subject = encodeURIComponent(subjectLine);
      var es = isEsLocale();
      var mailBody = encodeURIComponent(
        (es ? "Nombre: " : "Name: ") +
          name +
          "\n" +
          (es ? "Correo: " : "Email: ") +
          email +
          "\n" +
          (es ? "Perfil: " : "I am a: ") +
          role +
          "\n\n" +
          message
      );
      function mailtoFallback() {
        window.location.href =
          "mailto:hello@wakeuplabs.io?subject=" + subject + "&body=" + mailBody;
      }

      var btn = form.querySelector('button[type="submit"]');
      var prevLabel = btn ? btn.textContent : "";
      if (btn) {
        btn.disabled = true;
        btn.textContent = es ? "Enviando…" : "Sending…";
      }

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, role: role, message: message }),
      })
        .then(function (res) {
          return res.json().then(function (data) {
            if (!res.ok) throw new Error(data.error || "Request failed");
            return data;
          });
        })
        .then(function () {
          if (btn) btn.textContent = es ? "Enviado" : "Sent";
          form.reset();
          setTimeout(function () {
            if (btn) {
              btn.textContent = prevLabel;
              btn.disabled = false;
            }
          }, 2200);
        })
        .catch(function () {
          if (btn) {
            btn.textContent = prevLabel;
            btn.disabled = false;
          }
          mailtoFallback();
        });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();

    var dayBtn = document.getElementById("theme-day");
    if (dayBtn) dayBtn.addEventListener("click", function () { applyTheme("light"); });

    initTerminals();
    initForm();
  });
})();

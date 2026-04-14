# Rootstock CLI Agent — Retail & ecosystem (messaging)

Audience: crypto-curious and crypto-native end users, builders, and community members who want to **use** Rootstock (wallets, bridges, explorer, dApps)—not institutional treasury teams.

This document is separate from [01-messaging-framework.md](01-messaging-framework.md) (institutional). **Do not merge** retail and institutional copy on the same scroll; use distinct URLs or entry points.

---

## Strategic positioning

**Core message:** From curiosity or vague intent to a **first useful on-chain action** on Rootstock—and repeat usage of ecosystem tools.

The retail CLI Agent is an **activation and education layer**: it reduces confusion about a smaller L2, official entry paths, and where to go next, without replacing wallet security or investment advice.

---

## Problem framing

- Rootstock has fewer default “mainstream” cues than large L1s; users stall on **chain ID, bridges, and where liquidity lives**.
- Non-crypto users need **plain-language guardrails** before moving funds.
- Crypto-native users still waste time **hunting explorers, RPC hints, and dApp fit** for a given goal.
- After a first transaction, many users **drop off** without a simple re-engagement loop (unlike institutional lifecycle, but analogous at retail scale).

---

## Value proposition

1. **Faster activation:** guided path to correct network, first receive, first bridge mental model, first dApp attempt.
2. **Safer defaults:** inspect-first commands, dry-run framing, links to official docs and explorers—not custodial promises.
3. **Ecosystem discovery:** map intent (“yield”, “stable”, “collectibles”) to **starting points** with clear “do your own research” boundaries.
4. **Operational relief:** common failure modes (wrong chain, stuck tx, basic gas questions) in one guided surface.

---

## KPI framework (retail)

| Metric | Notes |
|--------|--------|
| **D1 activation** | User completes a defined “first win” (e.g. wallet on correct network, or first successful read via explorer, or first completed bridge attempt per checklist). |
| **D7 return** | User returns to run a second flow or dApp suggestion within7 days. |
| **Bridge / entry** | % of guided sessions that reach a documented bridge or official on-ramp step (education, not endorsement). |
| **dApp click-through** | Clicks to categorized ecosystem destinations from suggestions (proxy for discovery). |
| **Support deflection** | Fewer repeated “how do I…” questions in community channels (if measured alongside support). |

Institutional KPIs (funnel qualification, AUM) **do not apply** here; avoid mixing boards or investor language.

---

## Product narrative pillars

### 1) Terminal-first clarity

Same interaction pattern as the institutional concept: **commands users can inspect**, copy, and reason about—pitched at individuals, not committees.

### 2) Inspect before execute

Retail copy stresses **simulation, explanation, and links** before any action that moves funds.

### 3) Ecosystem cartography

The agent summarizes **where** in the Rootstock stack the user is (explorer, bridge concept, dApp category) without pretending to rank “best” investments.

### 4) Multi-agent (future-facing)

A **Rootstock guide** can hand off to specialized agents (bridge explainer, wallet safety, dApp-specific helpers). Messaging: **orchestration**, not a single monolithic brain.

---

## Differentiation vs institutional CLI Agent

| | Institutional | Retail & ecosystem |
|--|---------------|-------------------|
| Primary outcome | Funded vault position, AUM lifecycle | First useful action, repeat usage |
| Tone | Compliance, roles, audit | Education, safety, discovery |
| Commands | qualify, allocate plan, policy explain | wallet status, bridge compare, explorer tx, dapp suggest |
| Risk copy | Commercial pilot under contract | No investment advice; user custody; official links |

---

## Disclaimers (always-on)

- Not financial, tax, or legal advice. No endorsement of specific bridges, tokens, or dApps.
- Users remain responsible for keys, approvals, and contract interactions.
- Illustrative CLI on marketing pages; production behavior requires engineering and security review.
- Prefer **official** Rootstock / Rootstock Labs documentation and explorer links in any shipped product.

---

## Commercial storyline (Wake Up Labs)

**One-liner:** “We help Rootstock Labs and partners grow **activated users** through a CLI-shaped agent that teaches safe paths into the ecosystem and scales discovery without diluting institutional positioning.”

**Strategy call:** align on retail KPIs, categories of dApps to surface, and boundaries for automation vs human support—**distinct** from institutional pilot pricing.

---

## Objection handling (short)

**“Retail should be mobile app / chat, not CLI.”**  
Response: CLI is a **pattern** (inspectable, automatable); the same agent can expose chat or mobile later. The landing proves workflow and governance hooks.

**“Small chain—why not just better docs?”**  
Docs are static; the agent **personalizes the next step** and ties explorer, bridge concepts, and dApp goals in one session.

**“Multi-agent is hype.”**  
Position as **modularity**: swap specialists (bridge vs NFT) without rewriting the whole product; landing shows architecture intent only.

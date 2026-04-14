# Demo Script - Rootstock Institutional CLI Agent

## Demo Goal

Show a realistic institutional journey from first contact to funded vault position and re-deposit prompt using a command-driven, policy-aware assistant.

## Demo Duration

8-12 minutes

## Demo Narrative

"An institutional allocator wants BTC yield exposure with operational control. The agent qualifies the account, prepares the first allocation workflow, and later prompts a treasury follow-up for expansion."

---

## Demo Setup Notes

- This is a guided simulation (no real capital movement).
- All account and policy data are sample values.
- Emphasize controls and approvals at each stage.

---

## Command Walkthrough (Happy Path)

### 1) Start institutional session

```bash
rootstock institutional session start --org "NorthBridge Capital" --role "treasury_manager"
```

**Expected output (example):**

- Session initialized
- Profile loaded: institutional
- Required checks detected: KYC, custody policy, deposit policy

**Narration point:** The agent starts with context and role awareness.

---

### 2) Run qualification and readiness check

```bash
rootstock institutional qualify --check kyc,aml,custody,policy --output summary
```

**Expected output (example):**

- KYC: pass
- AML: pass
- Custody policy: pass
- Allocation policy: conditional (requires dual approval above 250 BTC)
- Recommendation: eligible for guided allocation flow

**Narration point:** Compliance and policy checks are built into flow entry.

---

### 3) Ask vault suitability by mandate

```bash
rootstock vaults recommend --mandate "btc_treasury_yield" --risk-profile moderate --horizon 180d
```

**Expected output (example):**

- Primary path: BTC Vault
- Secondary path: USD Vault (for treasury stability sleeve)
- Suggested first allocation: 70/30 based on mandate

**Narration point:** Agent translates institutional mandate into actionable options.

---

### 4) Simulate first allocation plan

```bash
rootstock allocate plan --btc 120 --usd 3000000 --vaults btc,usd --mode guided
```

**Expected output (example):**

- Draft allocation created
- Required approvals: operations_lead + treasury_director
- Estimated time-to-execution: same day after approvals

**Narration point:** The agent prepares an execution-ready plan instead of static guidance.

---

### 5) Policy gate and confirmation request

```bash
rootstock allocate submit --plan-id plan_8472 --require-approvals true
```

**Expected output (example):**

- Plan submitted to approval workflow
- Pending signatures: 2/2
- Status channel enabled: #institutional-allocations

**Narration point:** Guardrails are explicit and auditable.

---

### 6) Monitor first funded position

```bash
rootstock positions monitor --account northbridge_main --view kpi
```

**Expected output (example):**

- First funded position: active
- Vault exposure summary: BTC Vault 70%, USD Vault 30%
- Alerts: none
- Next recommended review: 7 days

**Narration point:** Monitoring is concise for decision-makers.

---

### 7) Trigger lifecycle notification

```bash
rootstock lifecycle notify --rule "rebalance_or_topup" --threshold "idle_cash>5m OR drift>8%" --cadence weekly
```

**Expected output (example):**

- Notification policy created
- Recipients: treasury_manager, operations_lead
- Trigger channels: email + secure webhook

**Narration point:** Retention and expansion are automated, not manual follow-up.

---

### 8) Show re-deposit opportunity prompt

```bash
rootstock opportunities list --account northbridge_main --type redeposit --output brief
```

**Expected output (example):**

- Opportunity #1: deploy idle BTC tranche into existing BTC Vault sleeve
- Opportunity #2: top-up USD Vault within approved risk boundary
- Suggested action: open guided execution

**Narration point:** The same interface drives second-deposit conversion.

---

## Optional "Risk-Aware" Branch (2 minutes)

Use this if stakeholders ask about controls:

```bash
rootstock policy explain --plan-id plan_8472
```

Expected output:

- Why approvals are required
- Which constraints were evaluated
- Which action is blocked if policy is not met

---

## Demo Talking Track (Concise)

1. This is not a generic chatbot. It is an institutional conversion workflow.
2. Every critical action passes through policy and approval context.
3. The value is measurable in funnel and AUM metrics, not only in UX.
4. The same system handles onboarding and post-deposit expansion loops.

---

## Meeting Close Prompt

"If this flow aligns with Rootstock's institutional growth goals, we propose a 4-6 week pilot focused on qualification, first allocation, and re-deposit activation KPIs."

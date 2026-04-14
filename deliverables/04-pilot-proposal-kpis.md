# Pilot Proposal - Rootstock Institutional CLI Agent

## Purpose

Validate that a funnel-first CLI Agent can increase institutional conversion, accelerate first funding, and improve repeat allocation behavior in Rootstock-linked vault workflows.

## Pilot Duration

4-6 weeks

## Pilot Scope

### In Scope

- Institutional qualification workflow design.
- Guided first-allocation flow (BTC Vault / USD Vault paths).
- Lifecycle notification logic for re-deposit and treasury follow-up.
- KPI instrumentation model for funnel and retention outcomes.
- Stakeholder-ready demo and performance readout.

### Out of Scope (Pilot Phase)

- Full production rollout across all institutional accounts.
- Deep custom integrations beyond agreed pilot connectors.
- Broad UI surface beyond core CLI + guided command workflows.

## Work Phases

### Phase 1 - Discovery and Funnel Mapping (Week 1)

- Confirm target institutional personas and current funnel handoffs.
- Identify top drop-off points from lead to funded position.
- Define policy and approvals boundary for pilot actions.

**Deliverable:** prioritized funnel map with baseline metrics.

### Phase 2 - CLI Workflow Design (Weeks 2-3)

- Build qualification-to-allocation command journeys.
- Add policy checks and approval gates in key steps.
- Define role-specific prompts for treasury and operations users.

**Deliverable:** clickable/scripted workflow demo.

### Phase 3 - Lifecycle Activation Layer (Week 4)

- Configure trigger rules for re-deposit and rebalance reminders.
- Add concise monitoring summaries and opportunity prompts.
- Create escalation paths for unresolved action items.

**Deliverable:** lifecycle runbook and notification model.

### Phase 4 - Measurement and Decision Pack (Weeks 5-6, if needed)

- Compare pilot outcomes vs baseline.
- Produce KPI report with findings and rollout recommendation.
- Align on scale plan, risks, and sequencing.

**Deliverable:** executive decision document.

## Success KPIs

### Funnel KPIs

- Lead -> Qualified institutional opportunity rate.
- Qualified -> Onboarded completion rate.
- Onboarded -> First funded allocation rate.
- Median time-to-first-funded position.

### Expansion and Retention KPIs

- First -> Second deposit conversion within target window.
- Active institutional account ratio.
- Net institutional AUM influenced by agent-driven journeys.
- Notification-to-action conversion rate.

### Operational KPIs

- Time saved by onboarding/sales/ops teams per account.
- Number of stalled opportunities reactivated.
- Approval turnaround time for allocation workflows.

## Data and Instrumentation Assumptions

- Rootstock and partner teams can provide a minimum baseline for funnel stages.
- Pilot participants and personas are defined before Week 2.
- Event tracking for key funnel transitions is available or can be added.
- Decision owners agree on KPI definitions upfront.

## Risk Register and Mitigation

### Risk: integration complexity slows pilot

Mitigation: phase integration depth; prioritize high-signal flows first.

### Risk: unclear ownership across BD/product/ops

Mitigation: assign pilot owner and weekly decision cadence.

### Risk: KPI ambiguity blocks interpretation

Mitigation: lock definitions and targets at pilot kickoff.

### Risk: conversation shifts to APY debate only

Mitigation: anchor pilot narrative on funnel outcomes and active AUM behavior.

## Required Inputs From Rootstock

- Target institutional segment for pilot.
- Current onboarding journey and key blockers.
- Policy and approval constraints for simulated workflows.
- Preferred KPIs and reporting cadence.
- Pilot stakeholders and decision authority.

## Team Structure (Suggested)

- Product lead (workflow and scope).
- Solutions engineer (CLI flow and event model).
- Institutional growth partner (funnel alignment).
- Rootstock sponsor (decision and cross-team unblock).

## Decision Gates

### Gate 1 (end of Week 1)

Approve prioritized pilot funnel and KPI framework.

### Gate 2 (end of Week 3)

Approve CLI workflow direction and policy model.

### Gate 3 (end of pilot)

Approve rollout to broader institutional motion or iterate with targeted scope.

## Final Pilot Deliverables

- Pilot-ready CLI journey scripts.
- Funnel and lifecycle KPI definition pack.
- Stakeholder demo artifacts.
- Rollout recommendation with phased roadmap.

# Fuzio Properties – Tiered Services UI

**README.md**

## Project Overview

This project is the foundation for a **tiered service selection and intelligent quote-request system** for Fuzio Properties.

The goal is to clearly communicate Fuzio’s management service offerings to prospective Body Corporate clients, allow them to self-identify their needs through a structured tier system, and then funnel those requests into a controlled, professional internal quoting workflow.

### What this system does

1. **Tiered Service Presentation (Frontend)**

  * Displays Fuzio’s management offerings as clear service tiers (Foundation, Financial Control, Governance & Operations, Strategic / Turnaround).
  * Uses a visual inclusion/exclusion format (✔ included / ✖ not included) so clients can immediately understand scope.
  * Does not display pricing — tiers are indicative only and used for qualification.

2. **Guided Quote Request**

  * After reviewing tiers, users can request a quote via a structured form.
  * The form collects key scheme details such as:

    * Scheme size, location, and age
    * Scheme type and operational complexity
    * Preferred service tier
    * Contact details
  * Optional self-assessment questions allow users to declare the scheme’s current position (arrears, AGMs, audits, disputes).

3. **Backend Intelligence & Qualification (Internal)**

  * Submitted data is sent to a secure backend (outside of WordPress).
  * AI is used internally to:

    * Normalise and summarise the submission
    * Enrich the request with publicly available contextual signals where appropriate
    * Draft a structured internal briefing email for Fuzio staff
  * AI output is **never shown to the client** and does not make final decisions.

4. **Human-Led Quoting**

  * Fuzio staff review the AI-assisted summary.
  * Quotes are drafted and approved by humans only.
  * This ensures professional judgment, legal safety, and flexibility per scheme.

### What this system is NOT

* It does not generate automatic prices.
* It does not publicly assess or “diagnose” schemes.
* It does not replace professional management judgment.
* It does not expose AI outputs or risk assessments to clients.

### Intended Benefits

* Educates prospective clients before first contact
* Sets clear expectations around scope of service
* Improves quality and consistency of quote requests
* Reduces unqualified or misaligned leads
* Positions Fuzio Properties as structured, transparent, and professional
* Creates a scalable foundation for future automation and CRM integration

## 1. Brand & Colour Scheme (Fuzio Properties)

These colours must be used consistently across the tier UI, forms, and call-to-action sections to remain aligned with the Fuzio website branding.

### 🎨 Primary Colours

* **Fuzio Orange (Primary Accent)**

  * Hex: `#F36F21`
  * Usage: Buttons, highlights, active tier states, icons, emphasis text

* **Charcoal / Near Black (Primary Text)**

  * Hex: `#1C1C1C`
  * Usage: Headings, primary text, icons

* **White (Base Background)**

  * Hex: `#FFFFFF`
  * Usage: Main backgrounds, cards, spacing areas

### 🎨 Secondary / Supporting Colours

* **Light Grey (Card & Divider Backgrounds)**

  * Hex: `#F5F5F5`
  * Usage: Tier cards, comparison tables, form sections

* **Mid Grey (Muted Text)**

  * Hex: `#7A7A7A`
  * Usage: Descriptions, disclaimers, secondary labels

* **Success Green (Included Tick)**

  * Hex: `#2E7D32`
  * Usage: "Included" indicators ✔

* **Neutral Red / Grey (Excluded Cross)**

  * Hex: `#B0B0B0` or `#C62828`
  * Usage: "Not included" indicators ✖ (keep subtle, not aggressive)

---

## 2. Tier Structure Overview

The tier system is **not priced on the website**.
It is designed to:

* Communicate **scope of service**
* Set **expectations**
* Feed into a **custom quote process**

Final pricing is determined **after scheme details are reviewed internally**.

---

## 3. Tier Definitions & Inclusions

### 🧱 Tier 1 — Foundation (Admin)

**Positioning:**
Core statutory and administrative management only.

**Includes:**

* Levy calculation & setup
* Monthly levy statements
* Basic financial administration (posting income & expenses)
* Administrative fund budget preparation
* Record keeping (owner registers, trustee records)
* Statutory compliance support (STSMA / CSOS admin requirements)
* General trustee admin support (email / telephonic)

**Does NOT include:**

* Levy collections / arrears management
* Reserve fund management
* Maintenance coordination
* Meeting facilitation
* Contractor or service provider management
* CSOS dispute handling

**Best suited for:**
Small or well-run schemes with low complexity and minimal arrears.

---

### 💼 Tier 2 — Financial Control (Admin + Levies)

**Positioning:**
Enhanced financial oversight and levy performance management.

**Includes everything in Tier 1, plus:**

* Levy collection management
* Arrears monitoring & reporting
* Financial reporting (admin + reserve funds)
* Annual budgets & forecasts
* Municipal & utility account oversight
* Cash-flow visibility & trustee reporting

**Does NOT include:**

* Maintenance project management
* AGM / SGM facilitation
* Contractor appointment oversight
* Governance coaching
* Dispute resolution support

**Best suited for:**
Medium to large schemes needing strong financial control and arrears stability.

---

### 📈 Tier 3 — Governance & Operations (Premium)

**Positioning:**
Proactive scheme governance and operational coordination.

**Includes everything in Tier 1 & 2, plus:**

* Maintenance coordination & tracking
* Service provider / contractor oversight
* AGM, SGM & trustee meeting facilitation
* Trustee governance support & guidance
* CSOS compliance support
* Risk & compliance reviews
* Operational reporting & recommendations

**Does NOT include:**

* Full turnaround or restructuring projects
* Legacy dispute remediation
* On-site workshops (unless agreed separately)

**Best suited for:**
Complex schemes requiring hands-on management and governance leadership.

---

### 🚀 Tier 4 — Strategic / Turnaround

**Positioning:**
High-support, corrective, or distressed-scheme management.

**Includes everything in Tier 1–3, plus:**

* Compliance and operational audits
* Legacy arrears remediation strategies
* Reserve fund recovery & long-term planning
* Utility & municipal optimisation projects
* Dispute support & escalation coordination
* Strategic governance restructuring
* Trustee workshops & scheme reset planning

**Best suited for:**
Schemes with structural, financial, or governance challenges.

---

## 4. UI Components Required

The tier UI should include:

### ✔ Tier Comparison Table

* Rows = services
* Columns = tiers
* ✔ Included / ✖ Not included indicators
* Clear visual hierarchy (Tier 2 & 3 highlighted as "most chosen")

### ✔ Tier Cards (Mobile Friendly)

* Tier name
* Short positioning statement
* "Includes / Does not include" bullet summary
* CTA: **"Request a Quote"**

### ✔ Quote Request CTA

* Scrolls to or redirects to a form
* No pricing shown
* Copy example:

  > "Tell us about your scheme and we'll prepare a tailored proposal."

---

## 5. Quote Request Form – Core Fields

Required fields:

* Scheme name
* Location (City / Province)
* Number of units
* Scheme type (Residential / Mixed / Commercial)
* Years operational
* Preferred tier (pre-selected from UI)
* Contact name
* Email
* Phone number

Optional (self-assessment – user declared):

* Approximate arrears %
* Last AGM held (Yes / No / Unsure)
* Audited financials up to date (Yes / No)
* Any CSOS disputes (Yes / No / Unsure)

---

## 6. Important Notes

* No automated pricing shown to users
* AI analysis is **internal only**
* Final quotes are **human-approved**
* Tier selection is **indicative, not binding**

---

## 7. Intended Outcome

This system:

* Educates clients before contact
* Filters unqualified leads
* Improves quote accuracy
* Reduces sales back-and-forth
* Positions Fuzio as structured, transparent, and professional

---

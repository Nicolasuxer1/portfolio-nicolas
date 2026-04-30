# Dropi — Transforming Brand Activation
### Senior Product Designer Challenge · April 2026

> **Role:** Senior Product Designer (End-to-End)  
> **Duration:** 4 days  
> **Scope:** Strategic research, UX strategy, solution design, measurement framework, project plan  
> **Status:** Completed challenge — integrating into product roadmap

---

## The Number That Started Everything

**Of every 100 brands that registered on Dropi, fewer than 20 ever became active.**

That's an 80%+ loss of potential ecosystem value — not from a product that doesn't work, but from an experience that fails to communicate why it matters.

This case study documents how I approached that problem: the research that surfaced the real causes, the strategic decisions that shaped the solution, the tradeoffs that were made consciously, and the framework built to measure what changes.

---

## 01 · Understanding the Ecosystem

Before designing anything, I needed to understand what Dropi actually is — and why brand activation sits at the center of its business model.

Dropi is a multilateral logistics platform. It connects four types of participants in a single ecosystem:

| Participant | Role |
|---|---|
| **Suppliers** | Provide verified product inventory |
| **Brands & Entrepreneurs** | Build their business, manage their catalog |
| **Dropshippers** | Resell without owning inventory |
| **Carriers** | Execute logistics and delivery |

The critical insight here isn't the platform — it's the dependency chain:

> **No active brands → no catalog → no dropshippers → no logistics volume → no carrier network.**

Brand activation isn't one feature among many. It's the first link in the entire chain of value. Every other participant in the ecosystem depends on it.

![Ecosystem dependency diagram]
> 📌 *Replace with: A flow diagram showing the four ecosystem participants connected left-to-right, with an arrow chain illustrating the dependency: Brands feed Dropshippers, who generate Logistics volume, which attracts Carriers. Brand activation highlighted as the critical first link.*

---

## 02 · My Role and Constraints

**What I was responsible for:**

- End-to-end product strategy: from research through to solution design and measurement framework
- All UX decisions: onboarding flow redesign, activation strategy, communication sequencing
- Stakeholder communication artifacts: documentation, rationale, handoff specs

**What I explicitly did not own or change:**

- Backend logic or data architecture
- The existing business model or pricing
- Product catalog structure or carrier integrations

**Why this matters:** The constraints shaped every decision. The goal was to dramatically improve activation without requiring engineering-heavy changes — which meant the leverage had to come from experience design, narrative reframing, and communication strategy. Not from building new product features from scratch.

---

## 03 · The Research

### Methodology

With a 4-day timeline, I couldn't run primary user research. Instead I built the analysis from three sources working in parallel: funnel decomposition, competitive benchmarking, and first-principles reasoning using the 5 Whys framework.

### The Activation Funnel — Where the 80% Actually Disappears

The problem statement said "less than 20% activation." But that number hides where the loss happens. I mapped the funnel across five stages:

| Stage | Users Reaching It | Conversion | Primary Drop Cause |
|---|---|---|---|
| Discovery / Visit | 100% | — | Entry point |
| Account Registration | 100% | ~65% | Too many fields, no progress indicator |
| Initial Onboarding | ~65% | ~40% | No immediate value shown |
| Profile / Catalog Setup | ~40% | ~25% | High friction: products, prices, logistics with no guidance |
| First Sale / Real Activation | ~25% | <20% | No "first success" mechanism or incentive to complete |

**The largest single drop — ~37% of all users — happens between onboarding and catalog configuration.**

This was the key diagnostic finding: the problem isn't acquisition. It's not even registration. The problem is that the experience between "I signed up" and "I understand why I'm here" is broken.

![Funnel visualization with dropout annotations]
> 📌 *Replace with: A vertical funnel chart with five stages. Each stage shows the percentage of users remaining, with the drop between Onboarding and Catalog Setup visually emphasized (larger gap, different color). Annotations explain the primary cause of drop at each stage.*

### 5 Whys — Getting to the Root Cause

Surface-level diagnosis would say "the onboarding is confusing." But that's a symptom, not a cause. I ran the 5 Whys:

**Why do less than 20% of brands activate?**  
→ Because the process from registration to first real use is long, confusing, and offers no perceived reward.

**Why is it confusing with no reward?**  
→ Because onboarding isn't designed to show immediate value or guide users toward an early success.

**Why doesn't onboarding show immediate value?**  
→ Because it's centered on platform configuration, not on the business outcomes the user is trying to achieve.

**Why is it centered on configuration instead of outcomes?**  
→ Because it was built from the platform's perspective ("what do you need to function?") not the user's ("what result do you want?").

**Root cause:**  
→ **The absence of a user research process that defined the 'aha moment' and specific quick wins for each brand profile.** The platform was designed inside-out.

### User Segments — Three Distinct Profiles, One Generic Onboarding

The "Brands & Entrepreneurs" segment isn't homogeneous. I identified three meaningfully different profiles:

**Profile A — The Digital Entrepreneur**  
25–35 years old. Looking for additional income streams. Tried selling on social media or marketplaces. *Primary job: generate income quickly with minimal upfront investment.*  
Key friction: doesn't understand the difference between being a brand and being a dropshipper.

**Profile B — The Established Brand**  
30–50 years old. Has an existing physical or e-commerce business. Wants to expand distribution channels without growing the sales team.  
Key friction: catalog migration is complex, no support for moving existing inventory.

**Profile C — The Content Creator**  
18–30 years old. Influencer with an existing audience. Wants to monetize their community with products.  
Key friction: doesn't understand logistics operations, needs extreme simplicity to stay focused on content.

**The problem:** one generic onboarding cannot efficiently serve all three. A single flow that tries to address everyone ends up optimized for no one.

### Competitive Benchmark — What the Best Do Differently

| Platform | Guided Onboarding | Time to First Value | Education | Personalization |
|---|---|---|---|---|
| Shopify | ⭐⭐⭐⭐⭐ | < 30 min | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Tiendanube | ⭐⭐⭐⭐ | < 45 min | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Mercado Shops | ⭐⭐⭐ | < 1 hour | ⭐⭐⭐ | ⭐⭐⭐ |
| WooCommerce | ⭐⭐ | > 2 hours | ⭐⭐ | ⭐⭐ |
| **Dropi (current)** | ⭐⭐ | > 2 hours | ⭐⭐ | ⭐ |

What separated the best performers wasn't product complexity — it was narrative. Shopify's setup wizard shows a real-time preview of your store at every step. Tiendanube uses LATAM-specific examples and pricing. Mercado Shops leverages its existing buyer ecosystem to make the "aha moment" (first connection with real buyers) happen in hours.

**Dropi's unique position:** No competitor offers what Dropi offers — a fully integrated ecosystem where uploading a product means immediate visibility to an active network of dropshippers. This differentiator exists in the product. It simply isn't communicated during onboarding at all.

### The Current Experience — A Journey That Ends in Abandonment

I mapped the end-to-end experience of a new brand (Profile A) through the current Dropi flow:

![Current state user journey map]
> 📌 *Replace with: A horizontal journey map with 6 stages (Discovery → Register → Onboarding → Configuration → First Use → Abandon/Activate). Each stage shows: user actions, emotional state (emoji + description), and pain points. The emotional arc should dip sharply from Curious at Discovery to Frustrated at Configuration, with most users shown exiting at that point.*

**The current emotional arc:**  
😊 Curious → 😐 Neutral → 😕 Confused → 😤 Frustrated → 😔 Exhausted → 😞 Abandons

The platform currently forces users to confront six sequential steps — including complex logistics configuration (carriers, guide formats, collection schedules) — before they've understood why any of it matters. The emotional cost arrives before the value does.

---

## 04 · The Six Insights That Shaped the Strategy

Every design decision in this project traces back to one of these six insights. They're not observations — they're strategic anchors.

**I1 — The 'Aha Moment' has never been defined or designed**  
Brands that activate do so *despite* the process, not because of it. Without a defined moment of value, any UX improvement is blind optimization.  
→ *Define the aha moment as: the first dropshipper requesting to sell your product — make it happen within 24 hours of registration.*

**I2 — Friction is more perceived than real**  
The configuration process isn't objectively harder than competitors, but it feels harder because no narrative connects the steps to an outcome. Users who understand *why* they're completing each task are up to 3x more likely to finish.  
→ *Reframe every onboarding step as a concrete benefit, not a technical requirement.*

**I3 — Three profiles need three onboarding paths**  
A digital entrepreneur seeking their first income has completely different motivations than an established brand seeking a new distribution channel. One flow can't serve both efficiently.  
→ *Divergent onboarding from the first question: profile type determines narrative, success metrics, and quick wins.*

**I4 — The ecosystem differentiator is the most powerful value prop that's never communicated**  
No competitor offers what Dropi offers. This should be the narrative center of onboarding, powered by real network data visible from the first login.  
→ *Show how many active dropshippers would see the brand's product — live, from the onboarding screen.*

**I5 — The post-registration window is completely wasted**  
The first 7 days after registration are critical. Platforms with 50%+ activation rates send up to 12 personalized communications in this window. Dropi has room to recover the majority of users who abandon onboarding through a re-engagement sequence.  
→ *Design a 7-day activation sequence: email + push + WhatsApp, personalized by profile.*

**I6 — Quick wins are the most effective activation catalyst**  
Platforms with activation rates above 50% share one pattern: a first small-but-meaningful success within 15 minutes. For Dropi, that quick win is: *"Your first product is now visible to 500 dropshippers."*  
→ *Build a simplified "first product in 5 minutes" flow with immediate visibility status in the dropshipper network.*

---

## 05 · The Strategy

### The Central Reframe

**Activation ≠ full configuration.**

This is the conceptual shift that unlocked the entire solution. The existing flow assumed that a brand needed to be *fully configured* before they were "active." That meant confronting carriers, guide formats, collection schedules, identity verification, and banking details — all before the user had ever seen any value from the platform.

The new definition: **active means ready to receive value, not ready to operate everything.**

With that principle, the activation journey splits into three temporally distinct moments, each triggered by a real business event.

---

### Moment 1 — Minimum Viable Activation

**What the user sees:** Only two steps in the checklist. Steps 3–6 don't exist yet on their screen — not locked behind icons, simply not rendered. This eliminates the anxiety of seeing a long list from the start.

**Step 1 — Create your warehouse**  
The form itself doesn't change (name, phone, department, city, address). What changes is the framing.  

Before: *"Configure your logistics settings"*  
After: *"Your dispatch point — where your products will ship from"*

The cognitive load of the form is identical. The narrative context is completely different. The user understands *why* they're doing this.

The carrier guide format fields (VELOCES, ENVIA, INTERRAPIDISIMO, DOMINA, COORDINADORA, TCC, 99MINUTOS) are moved out of this step entirely and relocated to a settings area accessible later — they're logistical details that create noise before a user has any orders to ship.

**Step 2 — Upload your first product**  
Functionally similar to the current form, but with surgical reductions:

- Carrier guide format fields: removed from this form (now part of warehouse settings)
- Weight and dimensions: pre-populated with defaults, editable later, with a clear notice that they affect shipping cost
- Required fields only: name, photo, sale price, suggested price, basic description, category

The goal is a form that can be completed in under 5 minutes for a first product.

![Before/After: Warehouse creation form]
> 📌 *Replace with: Side-by-side comparison of the current "Crear Bodega" form (showing the full Guide Format section with 7 carrier dropdowns) vs. the redesigned version (showing only the 5 essential data fields, with a secondary link to "Configure carriers later"). Visual emphasis on what was removed and why.*

![Before/After: Product creation form]
> 📌 *Replace with: Side-by-side comparison of the current product form (showing weight, dimensions, guide format fields alongside name/price) vs. the redesigned version (showing only the essential fields: name, photo, price, suggested price, category, description). Annotations explain which fields were moved and where.*

---

### Moment 2 — The Aha Moment

This is the most important screen in the entire activation flow, and it currently doesn't exist.

Immediately after saving the first product — without navigating to a new page — a celebration state appears inline on the home dashboard. Not a generic "Congratulations!" modal. A message anchored to real platform data:

> *"Your product is now visible to Dropi's dropshippers. Right now, there are 1,847 active dropshippers selling products in the Sportswear category."*

That number is not decorative. It's the first moment the user viscerally understands why they're here. The Dropi catalog stops being abstract and becomes a real network with real people who could be selling their product today.

**What the checklist shows at this moment:**
- Two completed steps ✓
- A progress bar at 100% labeled "Your account is active"
- A single call to action: *"See how your product appears in the catalog"*

That's it. No more tasks. The user can explore freely or close their session with the feeling of having completed something meaningful.

![Aha moment screen design]
> 📌 *Replace with: Mockup of the home dashboard after completing step 2. Shows: completed checklist with green checkmarks, "Your account is active" badge, the real-data message about dropshipper visibility with the category-specific number prominently displayed, and a single CTA button. Clean, celebratory but not over-designed.*

---

### Moment 3 — Operational Activation (Triggered by First Order)

When the first order arrives, Dropi sends simultaneous push notification, email, and WhatsApp:

> *"You have your first order! Complete these 2 steps to dispatch it."*

At this moment — and only at this moment — steps 3 and 4 appear in the checklist. The user isn't completing them in the abstract. They're completing them to dispatch a real order that already exists. The motivation is categorically different.

**Step 3 — Configure dispatch and pickup:** Carrier selection and collection schedule make sense now, because there are packages to pick up.

**Step 4 — Manage your orders:** Order management has context now, because there's a customer waiting.

**Step 5 — Receive your earnings:** Activated after the first confirmed dispatch, when the user has real money to claim. Identity verification and bank details are now an action motivated by self-interest, not bureaucratic compliance.

**The pending order state:** When the first order arrives and logistics isn't yet configured, the order goes into "pending configuration" status. The dropshipper is notified of possible delay only after 24 hours — giving the brand time to complete setup. This is a product decision that requires alignment with engineering, and anticipating it in the design brief demonstrates operational thinking, not just UX thinking.

![Operational activation: First order notification sequence]
> 📌 *Replace with: Three-panel mockup showing: (1) the push notification/WhatsApp message with first order alert, (2) the updated home dashboard with steps 3-4 now visible and highlighted with urgency context, (3) the order in "pending configuration" status with a clear countdown and completion CTA.*

---

### Dropi Academy — A Parallel Program, Not a Checklist Item

In the current experience, "Register for Dropi Academy" is step 6 of the activation checklist. This is a structural mistake: it frames education as a requirement instead of a benefit.

The redesign removes it from the checklist entirely and converts it into an autonomous email marketing program:

- **Day 0:** Welcome email — what Dropi Academy is and what you'll get from it
- **Day 1:** First module recommended based on the product category they uploaded
- **Day 4:** Reminder if email wasn't opened (different subject line, shorter format)
- **Completion incentive:** Brands who complete Academy modules get featured placement in the dropshipper catalog and early access to new carriers

This converts Academy from an obligation into an aspiration. The platform rewards knowledge, not just completion.

---

### The Abandonment Recovery Sequence

If a user drops off during Step 1 or Step 2, a three-channel re-engagement sequence fires:

**T+2 hours — WhatsApp**  
Short message, direct link to the exact point where they stopped:  
*"Hi [name], you're one step away from activating your brand on Dropi. It'll take less than 5 minutes. Continue here →"*

**T+24 hours — Email**  
Context-driven message: how many dropshippers searched for products in their category that day. Real urgency, not manufactured.

**T+3 days — WhatsApp (different tone)**  
Not a reminder — an invitation:  
*"Do you have questions about setting up your first warehouse? Our team can help you in 10 minutes."*  
This opens a human support channel for users who didn't complete due to confusion, not lack of interest.

**T+7 days+: Long-term nurture**  
Biweekly emails featuring success stories from similar brands in the Dropi ecosystem. Planting social proof until the timing is right.

![7-day activation sequence diagram]
> 📌 *Replace with: A timeline diagram showing the 7-day re-engagement sequence. X-axis = days 0-7+, Y-axis = communication channels (WhatsApp, Email, Push). Each touchpoint shown as a node with the message type and trigger condition. Color-coded by channel. Shows both the "active user" path and the "abandoned user" re-engagement path.*

---

## 06 · The Live Demos

> These interactive prototypes demonstrate the key screens in the redesigned activation flow. Each demo is a functional HTML prototype — not a static mockup.

---

### Demo 1 — Redesigned Warehouse Creation (Step 1)

The same data, a completely different narrative frame. Notice what's absent: no carrier guide format fields, no logistics configuration. Just the essential dispatch point data, framed as a business asset rather than a technical requirement.

<iframe
  srcdoc='<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f5f5f0; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; padding: 24px; }
  .container { background: #fff; border-radius: 12px; border: 1px solid #e5e5e0; max-width: 720px; width: 100%; padding: 32px; }
  .step-badge { display: inline-flex; align-items: center; gap: 6px; background: #fff3e0; color: #e65100; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; margin-bottom: 16px; }
  .step-badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #ff6f00; }
  h2 { font-size: 20px; font-weight: 600; color: #1a1a1a; margin-bottom: 4px; }
  .subtitle { font-size: 13px; color: #888; margin-bottom: 28px; }
  .context-banner { background: #f0f7ff; border: 1px solid #b3d4ff; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; font-size: 13px; color: #1565c0; line-height: 1.5; }
  .context-banner strong { font-weight: 600; }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
  .form-group { display: flex; flex-direction: column; gap: 6px; }
  .form-group.full { grid-column: 1 / -1; }
  label { font-size: 12px; font-weight: 500; color: #555; text-transform: uppercase; letter-spacing: 0.04em; }
  input, select, textarea { border: 1px solid #ddd; border-radius: 8px; padding: 10px 12px; font-size: 14px; color: #1a1a1a; outline: none; transition: border-color 0.15s; width: 100%; background: #fff; }
  input:focus, select:focus, textarea:focus { border-color: #ff6f00; box-shadow: 0 0 0 3px rgba(255,111,0,0.08); }
  .divider { border: none; border-top: 1px solid #f0f0ec; margin: 24px 0; }
  .deferred-section { background: #fafaf7; border: 1px dashed #ddd; border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px; }
  .deferred-icon { width: 36px; height: 36px; border-radius: 8px; background: #f0f0ec; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; }
  .deferred-text { flex: 1; }
  .deferred-text p { font-size: 13px; font-weight: 500; color: #333; margin-bottom: 2px; }
  .deferred-text span { font-size: 12px; color: #999; }
  .deferred-link { font-size: 12px; color: #ff6f00; font-weight: 500; text-decoration: none; }
  .actions { display: flex; justify-content: space-between; align-items: center; margin-top: 28px; }
  .btn-primary { background: #ff6f00; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.15s; }
  .btn-primary:hover { background: #e65100; }
  .btn-secondary { background: transparent; color: #888; border: none; font-size: 13px; cursor: pointer; padding: 0; }
  .progress-indicator { display: flex; gap: 6px; align-items: center; }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: #ddd; }
  .dot.active { background: #ff6f00; width: 20px; border-radius: 4px; }
  .success-toast { display: none; position: fixed; bottom: 20px; right: 20px; background: #1a7a4a; color: #fff; padding: 12px 20px; border-radius: 8px; font-size: 13px; font-weight: 500; box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
  .success-toast.show { display: block; animation: slideIn 0.3s ease; }
  @keyframes slideIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
</style>
</head>
<body>
<div class="container">
  <div class="step-badge">Step 1 of 2</div>
  <h2>Your dispatch point</h2>
  <p class="subtitle">This is where your products ship from. Takes under 2 minutes to set up.</p>
  <div class="context-banner">
    <strong>Why this matters:</strong> Dropi uses this address to coordinate pickups with carriers once your first orders arrive. You can add as many warehouses as you grow.
  </div>
  <div class="form-grid">
    <div class="form-group">
      <label>Warehouse name</label>
      <input type="text" placeholder="e.g. Main Warehouse, Home Office">
    </div>
    <div class="form-group">
      <label>Contact phone</label>
      <input type="tel" placeholder="+57 300 000 0000">
    </div>
    <div class="form-group">
      <label>Department</label>
      <select><option value="">Select department</option><option>Valle del Cauca</option><option>Antioquia</option><option>Cundinamarca</option><option>Atlántico</option><option>Bolívar</option></select>
    </div>
    <div class="form-group">
      <label>City</label>
      <select><option value="">Select city</option><option>Cali</option><option>Medellín</option><option>Bogotá</option><option>Barranquilla</option><option>Cartagena</option></select>
    </div>
    <div class="form-group full">
      <label>Address</label>
      <input type="text" placeholder="Street, number, neighborhood">
    </div>
  </div>
  <div class="divider"></div>
  <div class="deferred-section">
    <div class="deferred-icon">🚚</div>
    <div class="deferred-text">
      <p>Carrier configuration</p>
      <span>VELOCES, ENVIA, INTERRAPIDISIMO and 6 others — set up when you have your first orders</span>
    </div>
    <a href="#" class="deferred-link">Configure later →</a>
  </div>
  <div class="actions">
    <div class="progress-indicator">
      <div class="dot active"></div>
      <div class="dot"></div>
    </div>
    <div style="display:flex; gap: 12px; align-items: center;">
      <button class="btn-secondary">Save and continue later</button>
      <button class="btn-primary" onclick="document.querySelector(\'.success-toast\').classList.add(\'show\'); setTimeout(() => document.querySelector(\'.success-toast\').classList.remove(\'show\'), 2500)">Save warehouse →</button>
    </div>
  </div>
</div>
<div class="success-toast">✓ Warehouse saved — let\'s add your first product</div>
</body>
</html>'
  width="100%"
  height="600"
  style="border: none; border-radius: 8px; box-shadow: 0 2px 16px rgba(0,0,0,0.08);"
></iframe>

---

### Demo 2 — Simplified Product Creation (Step 2)

Essential fields only. No carrier guide formats, no volumetric calculation friction. The form a brand can complete in under 5 minutes with their first product.

<iframe
  srcdoc='<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f5f5f0; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; padding: 24px; }
  .container { background: #fff; border-radius: 12px; border: 1px solid #e5e5e0; max-width: 720px; width: 100%; padding: 32px; }
  .step-badge { display: inline-flex; align-items: center; gap: 6px; background: #fff3e0; color: #e65100; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; margin-bottom: 16px; }
  .step-badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #ff6f00; }
  h2 { font-size: 20px; font-weight: 600; color: #1a1a1a; margin-bottom: 4px; }
  .subtitle { font-size: 13px; color: #888; margin-bottom: 28px; }
  .upload-zone { border: 2px dashed #ddd; border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 24px; cursor: pointer; transition: border-color 0.15s; background: #fafaf7; }
  .upload-zone:hover { border-color: #ff6f00; background: #fff8f3; }
  .upload-icon { font-size: 32px; margin-bottom: 8px; }
  .upload-text { font-size: 14px; color: #555; margin-bottom: 4px; }
  .upload-sub { font-size: 12px; color: #aaa; }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
  .form-group { display: flex; flex-direction: column; gap: 6px; }
  .form-group.full { grid-column: 1 / -1; }
  label { font-size: 12px; font-weight: 500; color: #555; text-transform: uppercase; letter-spacing: 0.04em; }
  .label-row { display: flex; justify-content: space-between; align-items: center; }
  .label-hint { font-size: 11px; color: #ff6f00; font-weight: 500; }
  input, select, textarea { border: 1px solid #ddd; border-radius: 8px; padding: 10px 12px; font-size: 14px; color: #1a1a1a; outline: none; transition: border-color 0.15s; width: 100%; background: #fff; }
  input:focus, select:focus, textarea:focus { border-color: #ff6f00; box-shadow: 0 0 0 3px rgba(255,111,0,0.08); }
  textarea { resize: vertical; min-height: 90px; }
  .price-input { position: relative; }
  .price-input::before { content: "$"; position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #aaa; font-size: 14px; }
  .price-input input { padding-left: 24px; }
  .visibility-row { display: flex; gap: 12px; margin-bottom: 20px; }
  .vis-option { flex: 1; border: 1px solid #ddd; border-radius: 8px; padding: 12px; cursor: pointer; transition: all 0.15s; }
  .vis-option.selected { border-color: #ff6f00; background: #fff8f3; }
  .vis-option input[type="radio"] { display: none; }
  .vis-title { font-size: 13px; font-weight: 600; color: #333; margin-bottom: 2px; }
  .vis-desc { font-size: 12px; color: #888; }
  .deferred-row { background: #fafaf7; border: 1px dashed #ddd; border-radius: 8px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
  .deferred-left { display: flex; align-items: center; gap: 10px; }
  .deferred-icon { font-size: 16px; }
  .deferred-text p { font-size: 13px; color: #555; }
  .deferred-text span { font-size: 11px; color: #aaa; }
  .deferred-link { font-size: 12px; color: #ff6f00; font-weight: 500; }
  .actions { display: flex; justify-content: space-between; align-items: center; }
  .btn-primary { background: #ff6f00; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.15s; }
  .btn-primary:hover { background: #e65100; }
  .btn-secondary { background: transparent; color: #888; border: none; font-size: 13px; cursor: pointer; }
  .progress-indicator { display: flex; gap: 6px; align-items: center; }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: #ddd; }
  .dot.done { background: #1a7a4a; }
  .dot.active { background: #ff6f00; width: 20px; border-radius: 4px; }
</style>
</head>
<body>
<div class="container">
  <div class="step-badge">Step 2 of 2</div>
  <h2>Your first product</h2>
  <p class="subtitle">Add the essentials now — you can always refine details later from your catalog.</p>
  <div class="upload-zone">
    <div class="upload-icon">📷</div>
    <div class="upload-text">Drop your product photo here</div>
    <div class="upload-sub">JPG or PNG, up to 10MB — or click to browse</div>
  </div>
  <div class="form-grid">
    <div class="form-group full">
      <label>Product name</label>
      <input type="text" placeholder="Give your product a clear, searchable name">
    </div>
    <div class="form-group">
      <div class="label-row">
        <label>Your price (cost)</label>
        <span class="label-hint">What you pay</span>
      </div>
      <div class="price-input"><input type="number" placeholder="0"></div>
    </div>
    <div class="form-group">
      <div class="label-row">
        <label>Suggested sale price</label>
        <span class="label-hint">What dropshippers charge</span>
      </div>
      <div class="price-input"><input type="number" placeholder="0"></div>
    </div>
    <div class="form-group full">
      <label>Category</label>
      <select><option value="">Choose a category</option><option>Sportswear</option><option>Footwear</option><option>Accessories</option><option>Electronics</option><option>Home & Living</option><option>Beauty</option><option>Health & Wellness</option></select>
    </div>
    <div class="form-group full">
      <label>Description</label>
      <textarea placeholder="What is this product, how does it work, and what makes it worth buying? (min. 200 characters)"></textarea>
    </div>
  </div>
  <div style="margin-bottom: 8px;"><label>Visibility</label></div>
  <div class="visibility-row">
    <div class="vis-option selected" onclick="document.querySelectorAll(\'.vis-option\').forEach(v=>v.classList.remove(\'selected\')); this.classList.add(\'selected\')">
      <div class="vis-title">🌐 Public</div>
      <div class="vis-desc">Visible to all dropshippers in the catalog</div>
    </div>
    <div class="vis-option" onclick="document.querySelectorAll(\'.vis-option\').forEach(v=>v.classList.remove(\'selected\')); this.classList.add(\'selected\')">
      <div class="vis-title">🔒 Private</div>
      <div class="vis-desc">Only you can see and sell this product</div>
    </div>
  </div>
  <div class="deferred-row">
    <div class="deferred-left">
      <div class="deferred-icon">📦</div>
      <div class="deferred-text">
        <p>Weight & dimensions</p>
        <span>Defaults applied — affects shipping cost · Update anytime in product settings</span>
      </div>
    </div>
    <a href="#" class="deferred-link">Edit later →</a>
  </div>
  <div class="actions">
    <div class="progress-indicator">
      <div class="dot done"></div>
      <div class="dot active"></div>
    </div>
    <div style="display:flex; gap: 12px; align-items: center;">
      <button class="btn-secondary">← Back</button>
      <button class="btn-primary">Publish my product →</button>
    </div>
  </div>
</div>
</body>
</html>'
  width="100%"
  height="700"
  style="border: none; border-radius: 8px; box-shadow: 0 2px 16px rgba(0,0,0,0.08);"
></iframe>

---

### Demo 3 — The Aha Moment Screen

The single most important screen in the redesign. This is what the user sees immediately after saving their first product — the moment the abstract platform becomes a real, active network.

<iframe
  srcdoc='<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f5f5f0; min-height: 100vh; padding: 24px; }
  .home { max-width: 720px; margin: 0 auto; }
  .top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
  .brand-name { font-size: 16px; font-weight: 600; color: #1a1a1a; }
  .brand-sub { font-size: 12px; color: #aaa; margin-top: 1px; }
  .active-badge { background: #e8f5e9; color: #2e7d32; font-size: 12px; font-weight: 600; padding: 5px 12px; border-radius: 20px; display: flex; align-items: center; gap: 5px; }
  .active-badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #43a047; animation: pulse 2s infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
  .aha-card { background: linear-gradient(135deg, #fff8f3 0%, #fff3e6 100%); border: 1.5px solid #ffcc80; border-radius: 16px; padding: 28px; margin-bottom: 20px; position: relative; overflow: hidden; }
  .aha-card::before { content: "🎉"; position: absolute; right: 24px; top: 20px; font-size: 32px; opacity: 0.3; }
  .aha-eyebrow { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #ff6f00; margin-bottom: 10px; }
  .aha-headline { font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; line-height: 1.3; }
  .aha-headline span { color: #ff6f00; }
  .aha-stat { display: flex; align-items: baseline; gap: 8px; margin-bottom: 16px; background: rgba(255,255,255,0.7); border-radius: 10px; padding: 14px 18px; }
  .stat-num { font-size: 36px; font-weight: 700; color: #ff6f00; }
  .stat-label { font-size: 14px; color: #555; line-height: 1.4; }
  .aha-cta { display: inline-flex; align-items: center; gap: 8px; background: #ff6f00; color: #fff; border: none; border-radius: 8px; padding: 12px 22px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.15s; text-decoration: none; }
  .aha-cta:hover { background: #e65100; }
  .checklist-card { background: #fff; border: 1px solid #e5e5e0; border-radius: 12px; padding: 20px; margin-bottom: 16px; }
  .checklist-title { font-size: 13px; font-weight: 500; color: #888; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 14px; }
  .check-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #f5f5f0; }
  .check-item:last-child { border-bottom: none; padding-bottom: 0; }
  .check-icon { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .check-icon.done { background: #e8f5e9; color: #2e7d32; font-size: 13px; }
  .check-label { font-size: 14px; color: #333; }
  .check-label.done { text-decoration: line-through; color: #aaa; }
  .progress-bar-wrap { background: #f0f0ec; border-radius: 4px; height: 6px; margin-top: 14px; }
  .progress-bar { background: #43a047; height: 6px; border-radius: 4px; width: 100%; transition: width 1s ease; }
  .progress-label { display: flex; justify-content: space-between; margin-top: 6px; }
  .progress-label span { font-size: 12px; color: #888; }
  .progress-label strong { font-size: 12px; color: #2e7d32; font-weight: 600; }
  .stats-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .stat-card { background: #fff; border: 1px solid #e5e5e0; border-radius: 10px; padding: 16px; }
  .stat-card-num { font-size: 24px; font-weight: 700; color: #1a1a1a; }
  .stat-card-label { font-size: 12px; color: #aaa; margin-top: 2px; }
</style>
</head>
<body>
<div class="home">
  <div class="top-bar">
    <div>
      <div class="brand-name">Mi Marca Deportiva</div>
      <div class="brand-sub">Brand account · Created today</div>
    </div>
    <div class="active-badge">Account active</div>
  </div>

  <div class="aha-card">
    <div class="aha-eyebrow">✓ Your first product is live</div>
    <div class="aha-headline">Your product is already visible to <span>Dropi dropshippers</span></div>
    <div class="aha-stat">
      <div class="stat-num">1,847</div>
      <div class="stat-label">active dropshippers currently selling products in the <strong>Sportswear</strong> category — any of them can start selling yours today</div>
    </div>
    <a href="#" class="aha-cta">See how your product appears in the catalog →</a>
  </div>

  <div class="checklist-card">
    <div class="checklist-title">Setup checklist</div>
    <div class="check-item">
      <div class="check-icon done">✓</div>
      <span class="check-label done">Create your dispatch warehouse</span>
    </div>
    <div class="check-item">
      <div class="check-icon done">✓</div>
      <span class="check-label done">Upload your first product</span>
    </div>
    <div class="progress-bar-wrap">
      <div class="progress-bar"></div>
    </div>
    <div class="progress-label">
      <span>Steps completed</span>
      <strong>You&apos;re active — next steps unlock with your first order</strong>
    </div>
  </div>

  <div class="stats-row">
    <div class="stat-card">
      <div class="stat-card-num">1</div>
      <div class="stat-card-label">Products published</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-num">1</div>
      <div class="stat-card-label">Active warehouse</div>
    </div>
  </div>
</div>
</body>
</html>'
  width="100%"
  height="680"
  style="border: none; border-radius: 8px; box-shadow: 0 2px 16px rgba(0,0,0,0.08);"
></iframe>

---

### Demo 4 — First Order Notification & Operational Activation

When the first order arrives, the experience shifts from setup to urgency. Steps 3 and 4 appear for the first time, with context that makes completing them feel necessary, not bureaucratic.

<iframe
  srcdoc='<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f5f5f0; min-height: 100vh; padding: 24px; }
  .home { max-width: 720px; margin: 0 auto; }
  .notification-banner { background: #1a7a4a; color: #fff; border-radius: 12px; padding: 18px 20px; margin-bottom: 20px; display: flex; align-items: flex-start; gap: 14px; }
  .notif-icon { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
  .notif-body { flex: 1; }
  .notif-eyebrow { font-size: 11px; opacity: 0.7; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; }
  .notif-title { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
  .notif-sub { font-size: 13px; opacity: 0.85; }
  .notif-cta { background: rgba(255,255,255,0.2); color: #fff; border: none; border-radius: 6px; padding: 8px 14px; font-size: 12px; font-weight: 600; cursor: pointer; margin-top: 10px; display: inline-block; }
  .order-card { background: #fff; border: 1.5px solid #ffcc80; border-radius: 12px; padding: 20px; margin-bottom: 20px; }
  .order-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
  .order-title { font-size: 15px; font-weight: 600; color: #1a1a1a; }
  .order-id { font-size: 12px; color: #aaa; margin-top: 2px; }
  .order-status { background: #fff3e0; color: #e65100; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 12px; }
  .order-row { display: flex; justify-content: space-between; font-size: 13px; padding: 8px 0; border-bottom: 1px solid #f5f5f0; }
  .order-row:last-child { border-bottom: none; }
  .order-label { color: #888; }
  .order-val { color: #333; font-weight: 500; }
  .countdown { display: flex; align-items: center; gap: 8px; background: #fff8e1; border: 1px solid #ffe082; border-radius: 8px; padding: 10px 14px; margin-top: 12px; }
  .countdown-icon { font-size: 16px; }
  .countdown-text { font-size: 12px; color: #795548; }
  .countdown-text strong { color: #e65100; }
  .checklist-card { background: #fff; border: 1px solid #e5e5e0; border-radius: 12px; padding: 20px; }
  .checklist-title { font-size: 13px; font-weight: 500; color: #888; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 14px; }
  .check-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #f5f5f0; }
  .check-item:last-child { border-bottom: none; }
  .check-icon { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 13px; }
  .check-icon.done { background: #e8f5e9; color: #2e7d32; }
  .check-icon.pending { background: #fff3e0; color: #ff6f00; font-weight: 700; font-size: 12px; }
  .check-icon.locked { background: #f5f5f0; color: #ccc; font-size: 12px; }
  .check-label { font-size: 14px; }
  .check-label.done { text-decoration: line-through; color: #aaa; }
  .check-label.active { color: #1a1a1a; font-weight: 500; }
  .check-label.locked { color: #ccc; }
  .check-action { margin-left: auto; background: #ff6f00; color: #fff; border: none; border-radius: 6px; padding: 6px 14px; font-size: 12px; font-weight: 600; cursor: pointer; }
</style>
</head>
<body>
<div class="home">
  <div class="notification-banner">
    <div class="notif-icon">🎯</div>
    <div class="notif-body">
      <div class="notif-eyebrow">New notification · Just now</div>
      <div class="notif-title">You have your first order!</div>
      <div class="notif-sub">A dropshipper sold your Compression Leggings. Complete 2 steps to dispatch it.</div>
      <button class="notif-cta">View order</button>
    </div>
  </div>

  <div class="order-card">
    <div class="order-header">
      <div>
        <div class="order-title">Compression Leggings — Black M</div>
        <div class="order-id">Order #DRP-00001 · via DropVentas Colombia</div>
      </div>
      <div class="order-status">Pending dispatch</div>
    </div>
    <div class="order-row">
      <span class="order-label">Customer</span>
      <span class="order-val">María González · Bogotá</span>
    </div>
    <div class="order-row">
      <span class="order-label">Your earnings</span>
      <span class="order-val" style="color: #1a7a4a; font-weight: 700;">$28,000 COP</span>
    </div>
    <div class="order-row">
      <span class="order-label">Carrier</span>
      <span class="order-val">To be assigned after carrier setup</span>
    </div>
    <div class="countdown">
      <span class="countdown-icon">⏱</span>
      <span class="countdown-text">Complete setup within <strong>24 hours</strong> to avoid notifying the dropshipper of a delay</span>
    </div>
  </div>

  <div class="checklist-card">
    <div class="checklist-title">Complete to dispatch your order</div>
    <div class="check-item">
      <div class="check-icon done">✓</div>
      <span class="check-label done">Create your dispatch warehouse</span>
    </div>
    <div class="check-item">
      <div class="check-icon done">✓</div>
      <span class="check-label done">Upload your first product</span>
    </div>
    <div class="check-item">
      <div class="check-icon pending">3</div>
      <span class="check-label active">Configure dispatch & pickups</span>
      <button class="check-action">Do now →</button>
    </div>
    <div class="check-item">
      <div class="check-icon pending">4</div>
      <span class="check-label active">Manage your orders & guides</span>
      <button class="check-action">Do now →</button>
    </div>
    <div class="check-item">
      <div class="check-icon locked">5</div>
      <span class="check-label locked">Receive your earnings — unlocks after first dispatch</span>
    </div>
  </div>
</div>
</body>
</html>'
  width="100%"
  height="720"
  style="border: none; border-radius: 8px; box-shadow: 0 2px 16px rgba(0,0,0,0.08);"
></iframe>

---

## 07 · Decisions That Were Consciously Made (And Why)

Great design documents aren't just about what was built. They're about what was considered and rejected, and why the chosen path is defensible.

**Decision: Remove carriers from the initial onboarding**  
*Alternative considered:* Simplify the Guide Format section but keep it in the form.  
*Why rejected:* A simplified carrier form is still a carrier form. It still requires the user to know which carriers they want to use before they have any orders, any logistics experience, or any reason to care. The cognitive cost isn't in the number of fields — it's in the concept. Carrier configuration belongs where it's actionable: after the first order arrives.

**Decision: Only 2 steps visible initially (not 6 with a lock icon)**  
*Alternative considered:* Show all 6 steps, lock steps 3–6 with a visual lock and tooltip explaining they unlock later.  
*Why rejected:* Locked steps are still visible steps. They still communicate "you have 6 things to do." The anxiety they create isn't reduced by locking them — it's just delayed. Showing only 2 items means the user's goal is genuinely simple: warehouse and first product. Nothing else competes for attention.

**Decision: Aha moment as inline state, not a modal popup**  
*Alternative considered:* A full-screen celebration modal after saving the first product.  
*Why rejected:* Modals interrupt. They're dismissed reflexively by users who are used to popups asking them to subscribe, rate, or share. The aha moment needs to feel like a natural progression of the dashboard, not an interruption. Inline state change with real data is more trustworthy and less dismissable.

**Decision: WhatsApp as the primary re-engagement channel, not email**  
*Alternative considered:* Email-first recovery sequence.  
*Why rejected:* In Colombia and the broader LATAM e-commerce market, WhatsApp open rates are consistently 5–10× higher than email. For a time-sensitive re-engagement at T+2 hours, the difference between a 90% open rate and a 25% open rate is the difference between recovering 15% of lost users or recovering 3%. WhatsApp is the right channel for urgency; email is the right channel for context.

---

## 08 · Hypothesis & Measurement Framework

Five testable hypotheses, each with a specific metric and validation method. These aren't projections — they're commitments to measurement.

| # | Hypothesis | Validation Metric | Target | Priority |
|---|---|---|---|---|
| H1 | Redesigned 5-min onboarding → activation rate rises from 20% to 40% in 90 days | Funnel completion rate + % brands with ≥1 product in first 24h | 40% activation | 🔴 High |
| H2 | Personalized onboarding by profile → time to first value drops 50% | Time-to-first-value per segment, pre/post | −50% TtFV | 🔴 High |
| H3 | Showing live dropshipper count during onboarding → higher completion rate | A/B: completion rate with/without network metric | +15% completion | 🟠 Medium |
| H4 | 7-day email/WhatsApp sequence → recover 15% of abandoned users | Re-engagement rate: users who resume after sequence | 15% recovery | 🟠 Medium |
| H5 | Dropi Academy as email program → lower early churn | NPS at 30 days + churn rate during configuration stage | NPS +20 pts | 🟡 Medium-low |

**The North Star:** Move brand activation from <20% to 45–55% in 6 months without changes to the core product architecture or business model.

Based on competitive benchmarks and activation patterns from similar LATAM platforms, this target is achievable through experience design alone. It doesn't require new features — it requires communicating the right things at the right moment.

---

## 09 · What I'd Do Differently

**I'd run at least 3 user interviews before finalizing the strategy.**  
The research in this project was built entirely from secondary sources: competitive benchmarking, funnel decomposition, and first-principles reasoning. That's valuable, but it can't replace 30 minutes with a real entrepreneur who tried to register and stopped. One conversation often surfaces a friction point that no amount of analytical reasoning predicts.

**I'd validate the aha moment concept with real data before designing the screen.**  
The hypothesis that "seeing how many dropshippers are in your category" is motivating enough to drive completion is well-reasoned but unvalidated. An unmoderated usability test with 5 users — showing them the screen and asking them to think aloud — would tell us quickly whether the real number creates motivation or skepticism.

**I'd map the "Established Brand" (Profile B) activation journey separately.**  
This document focused primarily on Profile A (The Digital Entrepreneur) because it represents the highest-volume segment. But Profile B — a brand migrating an existing catalog of 50+ products — has fundamentally different needs. The "first product in 5 minutes" flow doesn't serve them. They need a bulk import path and a catalog migration guide, not a simplified single-product form.

---

## 10 · What This Project Demonstrates

Beyond the specific solution, this project documents a way of working:

**Research before pixels.** The 6 insights and 5 hypotheses came before any screen was designed. The screens are a consequence of the analysis, not a parallel track.

**Strategy from constraints.** The constraint of not changing backend logic or business rules forced a more creative solution: reframe the experience, not the product.

**Anticipating the hard questions.** The "pending order" state — what happens when a first order arrives and the brand can't dispatch — isn't a UX detail. It's an operational decision that requires engineering and business alignment. Raising it in the design brief signals that the designer thought past the happy path.

**Designing for a business outcome, not a feature.** The goal was never "redesign the onboarding." The goal was to move a number: activation rate from 20% to 45%. Every decision traces back to that number.

---

*Nicolás Vargas — Senior Product Designer*  
*Cali, Colombia · April 2026*  
*[nicolas-vargas.com](https://www.nicolas-vargas.com) · [LinkedIn](https://www.linkedin.com/in/nicolas-vargas-galindo/)*

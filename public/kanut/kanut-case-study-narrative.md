# Kanut
### How I turned a data viewer into a workspace operators actually own

> **Product Designer · Greenspec · 3 months · Shipped**

---

## More sensors. More data. More dashboards. Zero real control.

That was Kanut before this project.

The agricultural operators using it had everything modern IoT promised — real-time soil moisture, climate readings, irrigation flow, weather data streaming in by the second. And yet, every morning, technicians lost **1.5 hours per shift** just trying to make sense of what the system was telling them. **68% of routine actions** that could have been automated were still being executed manually. **1 in 3 technicians** struggled to trace alerts back to their cause in time to do anything useful about it.

The information existed. It just wasn't actionable.

This is the story of how I redesigned Kanut from a rigid data viewer into a modular workspace — and the systems thinking that made the difference between a UI refresh and an organizational shift.

---

## The numbers, before anything else

> 📌 *Replace with: Three big-number stat cards arranged horizontally — bold typography, minimal chrome.*
>
> **−42%** time on critical tasks · **87%** weekly dashboard use · **64%** users automating without support
>
> *Subhead under each: 60-day post-launch result*

These are the headline numbers. The rest of this case explains why they happened — and why none of them came from a new feature.

---

## 01 · The real problem wasn't the data. It was the structure.

When I joined the project, the obvious story was "Kanut needs better dashboards." That would have been wrong.

The first weeks of discovery — sessions with Carlos Bustamante, an ingeniero agrícola and Kanut's most advanced user — surfaced something different. The platform wasn't failing because it lacked features. It was failing because **its information architecture mirrored the backend, not the operator's mental model.**

Three quotes captured the entire problem:

> *"Sometimes I just need to compare two variables, but I have to go through too many menus to get there."*

> *"It's hard to know where to generate charts. It isn't intuitive."*

> *"I lose so much time each day on manual actions — I'd love to automate some processes."*

Each of those was a structural complaint disguised as a UI complaint. And the structural pattern was the same: **the system was rigid where the operation was fluid.**

> 📌 *Replace with: A "research synthesis" diagram — left column shows three operator quotes, middle column shows the structural insight extracted, right column shows the design principle that emerged. Visual emphasis on the diagonal flow from raw research → structural finding → design decision.*

---

## 02 · The reframe that unlocked everything

Most agricultural monitoring tools — including Kanut's pre-redesign self — answer a question the operator never asked: *"What does the platform want to show you today?"*

The reframe:

> ### *What if Kanut wasn't a data viewer, but a workspace?*

A data viewer presents what the platform thinks you need. A workspace lets you build what you need.

That distinction sounds small. It changes every architectural decision downstream.

This single shift in framing led to a redesign organized not around screens, but around three system-level principles:

| Principle | What it means in practice |
|---|---|
| **Modularity** | Every module follows the same predictable structure. Learn one, you've learned them all. |
| **Composability** | Operators build their own dashboards from drag-and-drop blocks. The product adapts to the operation, not vice versa. |
| **Transparency** | Every automation, every rule, every action has a natural-language explanation. No magic. No black boxes. |

Everything that follows — the navigation, the dashboard, the automation builder, the post-launch metrics — is a downstream consequence of these three principles.

---

## 03 · Information architecture as the real design

Before any pixel was placed in Figma, I rebuilt the information architecture. The principle that drove it:

> **If the user doesn't know where the information lives, no visual design will save them.**

The old structure had data scattered across menus that mapped to backend logic. The new structure organized everything around two axes — **Workspace** (the things you do) and **Modules** (the systems you manage) — with a repeatable internal template inside each module.

> 📌 *Replace with: Clean tree diagram of the new IA. Two main branches (Workspace, Modules) with their children. Visual emphasis on the repeated "Overview → Inputs & Data → Manual Controls → Automation → History → Settings" structure inside each module — that repetition is the whole point.*

The repetition is the strategy. Once an operator learns the pattern of one module, they've learned all of them. Predictability becomes a feature in itself — and it's the unlock for every metric this project later moved.

---

## 04 · The system in three pillars

### Pillar 1 — Navigation that adapts to your operation

The sidebar isn't a list of links. It's a configurable navigation surface.

A heating-heavy operation surfaces heating modules first. An operator with no lighting system simply hides it. New users see only what their farm actually uses — no dead ends, no irrelevant menus, no learned-helplessness from a system that's louder than the work.

> 📌 *Replace with: Side-by-side mockups — collapsed sidebar (icons only), expanded sidebar (full module list), and edit-mode overlay (showing module visibility checkboxes). Caption: "The same product. Three configurations. Each operator's choice."*

**Why it matters:** The product reshaped itself around the operator instead of asking the operator to reshape themselves around the product. That's the modularity principle made visible.

---

### Pillar 2 — A dashboard that's actually theirs

The dashboard is the daily landing surface. Its job isn't to show "everything." Its job is to show **what this specific operator needs to see this morning.**

What I built:

- **Shortcuts row** — direct access to the alerts, controls, and modules each user uses most
- **Active alerts table** — sortable, filterable, with one-click links to the linked automation rules
- **Tabbed dashboards** — operators can build and save multiple dashboards (Water System, Greenhouse North Wing, Energy Efficiency, Biosignals) and switch between them in one click
- **Drag-and-drop blocks** — every widget can be moved, resized, named, or hidden

> 📌 *Replace with: Mockup of the dashboard in edit mode — drag handles visible on each widget, "Add widget" panel open, multiple dashboard tabs at the top. Annotations point at: shortcut row, alerts table, tab switcher, drag affordance.*

A senior agronomist builds a "morning checks" dashboard with their five most-watched variables. A maintenance tech builds a "today's alerts" dashboard. Same product. Different workspaces.

This is what composability looks like in production.

---

### Pillar 3 — Automation, made readable

The most-validated finding from research was the appetite for automation. The risk: making it accessible without making it dumb.

The Formula Builder I designed has three layers:

**Layer 1 — Preset templates** for common patterns
*"if soil moisture < X, turn on irrigation"*

**Layer 2 — Manual formulas** for power users:
```
[Waterflow Rate] ÷ [Soil Moisture G1P05]
[Temperature Sensor] + [Manual Offset]
IF([Rain Accumulation] > 5, "Irrigation OFF", "Irrigation ON")
```

**Layer 3 — Natural-language preview**, generated automatically:
> *"Compare water level with soil moisture. If irrigation is proportional to soil conditions, adjust temperature. If accumulated rainfall is below 5mm, turn irrigation on or off accordingly."*

> 📌 *Replace with: Mockup of the Formula Builder showing all three layers in one view — data points panel on left, formula editor center, natural-language translation panel below. Highlight the natural-language section with a callout: "This is the unlock."*

That third layer is where the systems thinking pays off. It means a junior operator can read what a senior built, audit the logic, modify it without breaking it. Automation stops being personal scripts that live in one technician's head and becomes **shareable institutional knowledge**.

That's the transparency principle.

---

## 05 · One decision worth pausing on: weather as a module, not a widget

Most monitoring platforms put weather in the header. A small icon, a temperature reading, a forecast that you click to dismiss.

I made it a full module.

The reasoning: operators don't *look at* weather. They make decisions based on it. A widget is decorative. A module is operational. Treating weather as a first-class module signals — to the user, to the team, to anyone reading the design — that environmental data is operational data.

> 📌 *Replace with: Side-by-side of the full Weather Station module page (Overview, History, Configuration tabs visible) and the compact pop-over version that appears across the platform. Caption emphasizing both density levels.*

This is the kind of decision that doesn't show up in usability metrics, but shows up everywhere else: in how the product is talked about, in what users prioritize, in what gets built next.

---

## 06 · Decisions that were consciously made (and rejected)

The hardest part of senior product design isn't choosing the right answer — it's defending why the alternatives were rejected. Four decisions worth showing the working on:

> ### *Standardize all modules into the same six-section structure*
> **Alternative:** let each module's structure follow its functional needs (heating has different concerns than lighting).
> **Why rejected:** operators move between modules constantly. A heating tech and an irrigation tech need to share the same mental model. Predictability across modules is worth more than perfect optimization within any single module.

> ### *Drag-and-drop dashboards with no template-locked options*
> **Alternative:** pre-built dashboard templates that users could pick from.
> **Why rejected:** templates encode someone else's mental model. Research was clear — users wanted control, not curated defaults. Starting from blank teaches the system better than starting from a template the user has to deconstruct.

> ### *Natural-language preview for automation*
> **Alternative:** a graphical block-based automation builder (like Zapier).
> **Why rejected:** block builders look easier in demos but break down at the level of complexity agricultural automation actually requires. Formulas + natural-language layer give power users precision *and* give junior users a way to read and audit. Block builders give neither group what they really want.

> ### *Treat weather as a module, not a widget*
> **Alternative:** a header-bar weather widget.
> **Why rejected:** widgets are decorative. Modules are operational. The signal of "first-class operational data" was worth more than the screen real-estate saved.

---

## 07 · How I knew it was working — before launch

| Validation setup | |
|---|---|
| **Participants** | 10 expert users |
| **Format** | Moderated remote sessions, 25 min each |
| **Tasks tested** | (1) Build a personalized dashboard · (2) Create a real automation with field data · (3) Resolve a field alert |
| **Range completed** | 100% |
| **Task success rate** | 80% |
| **Time vs. baseline** | **42% faster** |

The 42% speed improvement was the headline. But the qualitative signal mattered just as much.

Multiple participants said variations of the same thing: *"this feels like my system now."*

That phrase — *my system* — is the validation that mattered. The redesign hadn't just shortened task time. It had shifted the user's relationship with the product from "tool I use" to "workspace I own."

That's the difference between a UI redesign and a system redesign.

---

## 08 · 60 days later, the production data

Validation testing predicted the direction. Production data confirmed it — and one number went further than I'd projected.

> 📌 *Replace with: A horizontal bar chart or 3-card layout — each result framed with target vs. actual.*
>
> | Hypothesis | Target | Actual |
> |---|---|---|
> | Modular IA reduces task time | −30% | **−42%** |
> | Customizable dashboards drive recurring use | 70% weekly | **87%** |
> | Natural-language preview enables self-service | 50% of users | **64%** |
> | Predictable structure reduces support load | −25% tickets | **−40%** |

The number I cared about most was the **64% of users configuring automations without support**.

That figure validated the entire systems thesis. The natural-language preview, the predictable module structure, the formula builder — together, they had lowered the learning curve enough that users could build their own logic without depending on the engineering team.

That's not a UX win. That's an organizational one.

Engineering hours that used to go into one-off automation requests now go into building new modules.

> 📌 *Replace with: A simple "before / after" diagram showing the team-resource shift. Before: engineering spending hours on ad-hoc user automation requests. After: users self-serving, engineering building new product capability. The bottleneck is gone.*

---

## 09 · The 3.5 hours per operator per week

Translated to operational impact:

**42% faster on critical tasks → ~3.5 hours saved per operator per week.**

Across an operation with 20 technicians, that's a full work-week of capacity recovered every week. Without changing the data layer. Without changing the hardware. Without changing the business model.

The leverage came from organizing the same information into a system that matched how operators actually work.

---

## 10 · What I'd do differently

**Push for AI-assisted UI ideation from week one.** Some of the most useful component variations came late, after I'd already shipped a v1 of the design system. Earlier exploration with AI as an ideation partner — not a substitute for design judgment — would have surfaced layout patterns sooner and given more time to validate them.

**Ship a leaner v1 and iterate, instead of designing the full system upfront.** The temptation in a 3-month engagement is to deliver a complete system. The better strategy is to ship the core navigation and dashboard early, learn from real production behavior, and let v2 be informed by data instead of theory.

**Run technical workshops with engineering at the start, not the middle.** The complexity of what Kanut actually processes — sensor cadence, data volumes, automation execution — is non-trivial. Front-loading that technical understanding through structured workshops would have saved several iterations and made the early designs more grounded in operational reality.

---

## 11 · What this project is really about

Strip away the agricultural domain, the IoT context, the specific UI patterns, and what's left is a single methodological argument:

> ### *The most impactful design decision I made wasn't a screen. It was the structure underneath the screens.*

The information architecture restructure is what made every metric in this case study possible. The screens are downstream consequences of getting the structure right.

That's the systems thinking I'm bringing to product design — and it's the lens I'd bring to any product where the surface symptom is "the UI is confusing" but the actual cause is "the structure doesn't match how the work happens."

Kanut had the data. It just needed the structure to turn data into decisions.

That structure is what I built.

---

*Nicolás Vargas — Product Designer*
*Kanut · Greenspec · 3-month engagement*
*[nicolas-vargas.com](https://www.nicolas-vargas.com) · [LinkedIn](https://www.linkedin.com/in/nicolas-vargas-galindo/)*

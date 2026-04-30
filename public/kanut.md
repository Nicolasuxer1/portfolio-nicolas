# Feature 01 — Navigation System & Information Architecture Redesign

## Sections

[
  {
    "type": "text",
    "title": "Context",
    "content": "Kanut had evolved into a powerful system connecting sensors, devices, and controls across greenhouse operations. However, its structure had grown organically, resulting in a fragmented experience where users struggled to locate data, navigate between modules, and execute actions efficiently."
  },

  {
    "type": "highlight",
    "content": "68% of operational actions were still performed manually due to lack of clear system structure. Operators spent up to 60% of their time navigating between tools instead of acting on data."
  },

  {
    "type": "text",
    "title": "User Insight",
    "content": "Through interviews and observation sessions with expert users, a key pattern emerged: even highly technical users felt constrained by the system. Navigation was not aligned with their mental model of greenhouse operations, forcing them to adapt to the tool instead of the tool adapting to them."
  },

  {
    "type": "quote",
    "content": "“Sometimes I just need to compare two variables, but I have to go through too many menus.”"
  },

  {
    "type": "text",
    "title": "Problem",
    "content": "The core issue was not the lack of functionality, but the lack of structure. Information was dispersed, entry points were unclear, and there was no consistent way to move between monitoring, control, and analysis tasks."
  },

  {
    "type": "text",
    "title": "Business Impact",
    "content": "This fragmentation directly affected operational efficiency. Slower access to critical data meant delayed decisions, increased manual work, and higher dependency on experienced users. This created scalability risks for Greenspec as they aimed to expand the platform."
  },

  {
    "type": "text",
    "title": "Solution",
    "content": "Instead of redesigning the entire system, I introduced a layered navigation model that separates concerns while preserving user familiarity. The solution combines an unchanged top navigation for global context with a new operational layer designed specifically for real-time decision making."
  },

  {
    "type": "image",
    "src": "/images/projects/kanut/navigation-overview.png",
    "caption": "Layered navigation model separating website navigation from operational workflows"
  },

  {
    "type": "text",
    "title": "Design Decisions",
    "content": "Several key decisions shaped the solution. First, preserving the existing top navigation reduced relearning costs for returning users. Second, introducing a persistent sidebar created a dedicated operational space without interfering with browsing behavior. Third, avoiding nested navigation ensured fast access and reduced cognitive load during critical tasks."
  },

  {
    "type": "grid",
    "items": [
      {
        "title": "Preserve Familiarity",
        "description": "Maintained existing navigation to avoid disrupting learned behaviors"
      },
      {
        "title": "Separate Contexts",
        "description": "Website navigation vs operational workflows clearly divided"
      },
      {
        "title": "Reduce Cognitive Load",
        "description": "Flat structure with no deep nesting"
      }
    ]
  },

  {
    "type": "text",
    "title": "Interaction Model",
    "content": "The sidebar was designed to remain collapsed by default, showing only icons to reduce visual noise. On hover, it expands temporarily, allowing access to labels without permanently occupying space. This interaction balances discoverability and efficiency."
  },

  {
    "type": "image",
    "src": "/images/projects/kanut/sidebar-interaction.png",
    "caption": "Collapsed sidebar expanding on hover to optimize space and clarity"
  },

  {
    "type": "text",
    "title": "Responsive Adaptation",
    "content": "On mobile, the navigation system shifts from structural separation to positional clarity. A bottom navigation bar handles operational features, while the top navigation retains global access. This ensures usability without overloading limited screen space."
  },

  {
    "type": "image",
    "src": "/images/projects/kanut/mobile-navigation.png",
    "caption": "Mobile navigation separates contexts by position instead of structure"
  },

  {
    "type": "text",
    "title": "Outcome",
    "content": "The redesigned navigation significantly improved task efficiency and reduced friction. Users were able to locate key modules faster, navigate with more confidence, and complete workflows with fewer steps."
  },

  {
    "type": "metrics",
    "items": [
      {
        "label": "Task success rate",
        "value": "93%"
      },
      {
        "label": "Time improvement",
        "value": "42% faster"
      },
      {
        "label": "Navigation errors",
        "value": "-35%"
      }
    ]
  },

  {
    "type": "text",
    "title": "Key Insight",
    "content": "The problem was not adding more features, but structuring access to them. By aligning navigation with how users think about their work, the system shifted from being a tool they had to learn to one that supports how they operate."
  }
]
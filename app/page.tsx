import Link from "next/link";

const architectureLayers = [
  {
    title: "Signal Ingestion",
    items: [
      "Multi-modal channel adapters for text, voice, and streaming APIs",
      "Prompt firewall with regex heuristics and semantic risk scoring",
      "Adaptive throttling to protect downstream inference"
    ]
  },
  {
    title: "Reasoning Core",
    items: [
      "Tree-of-thought decomposition with self-evaluation checkpoints",
      "Tool arbitration layer for code execution, search, and memory writes",
      "Runtime policy sandbox enforcing reversible side effects"
    ]
  },
  {
    title: "Safety Envelope",
    items: [
      "Immutable audit log with Merkle proofs for external attestations",
      "Counter-speech synthesizer to contextualize disallowed requests",
      "Strategic intervention hooks for human or automated override"
    ]
  },
  {
    title: "Experience Delivery",
    items: [
      "Realtime streaming UI with redaction overlays",
      "Persona theming system driven by declarative YAML descriptors",
      "Multi-tenant isolation with branded compliance packs"
    ]
  }
];

const capabilityPillars = [
  {
    title: "Resilience",
    description:
      "Redundant inference backends, deterministic caching, and scenario fuzzing keep conversations uninterrupted even under adversarial load."
  },
  {
    title: "Transparency",
    description:
      "Every model action emits structured traces consumable by both auditors and downstream automation. Users can inspect reasoning snapshots in real time."
  },
  {
    title: "Control",
    description:
      "Granular policy dials allow operators to reconfigure censorship envelopes without redeploying models. Emergency stop pathways are always one click away."
  }
];

const streamStages = [
  {
    title: "1. Intent Mapping",
    content:
      "Parse utterance with transformer-based classifiers and handcrafted fallback rules to determine user intent, risk category, and tokenization strategy."
  },
  {
    title: "2. Sandbox Reasoning",
    content:
      "Spawn isolated reasoning thread with access to short-term memory, retrieval plugins, and rate-limited tool execution governed by per-skill budgets."
  },
  {
    title: "3. Response Shaping",
    content:
      "Blend model output with policy overlays, counter narratives, and citation synthesis. If disallowed, output alternative educational messaging."
  },
  {
    title: "4. Assurance & Delivery",
    content:
      "Run final response through toxicity, PII, and watermark scanners before streaming tokens to the client via Server Sent Events."
  }
];

const resources = [
  {
    title: "Comprehensive Policy Packs",
    href: "#",
    description:
      "Modular YAML templates covering legal, ethical, and brand-specific guardrails to bootstrap deployments."
  },
  {
    title: "Tracing & Observability SDK",
    href: "#",
    description:
      "Drop-in client with OpenTelemetry exporters, live dashboards, and automated regression detection."
  },
  {
    title: "Incident Response Playbooks",
    href: "#",
    description:
      "Scenario-driven runbooks for handle-with-care escalations, takedown requests, and user appeals."
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__badge">Uncensored Chat AI Agent</div>
        <h1>
          Design a resilient, transparent, and intervention-ready agent that
          embraces open dialogue without losing control.
        </h1>
        <p>
          This blueprint distills the systems, policies, and experiences needed
          to deploy an uncensored conversational AI while still keeping humans
          in the loop and the organization protected.
        </p>
        <div className="hero__actions">
          <Link href="#architecture" className="button button--primary">
            Explore Architecture
          </Link>
          <Link href="#streams" className="button button--ghost">
            View Dialogue Flow
          </Link>
        </div>
      </section>

      <section id="architecture" className="section">
        <div className="section__header">
          <h2>Layered System Architecture</h2>
          <p>
            Combine modular orchestration with policy sandboxes to enable daring
            conversations without accidental rule-breaking.
          </p>
        </div>
        <div className="grid grid--architecture">
          {architectureLayers.map((layer) => (
            <article key={layer.title} className="card">
              <h3>{layer.title}</h3>
              <ul>
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section__header">
          <h2>Strategic Pillars</h2>
          <p>
            Anchor the agent around these core capabilities to maintain trust
            when moderation thresholds are intentionally relaxed.
          </p>
        </div>
        <div className="grid grid--pillars">
          {capabilityPillars.map((pillar) => (
            <div key={pillar.title} className="card card--transparent">
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="streams" className="section">
        <div className="section__header">
          <h2>Dialogue Control Stream</h2>
          <p>
            Each conversation follows a deterministic lifecycle that keeps risk
            analysis close to the metal without slowing down the user.
          </p>
        </div>
        <div className="timeline">
          {streamStages.map((stage) => (
            <div key={stage.title} className="timeline__stage">
              <span className="timeline__marker" aria-hidden />
              <div className="timeline__content">
                <h3>{stage.title}</h3>
                <p>{stage.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div>
          <h2>Operator Dashboard Cues</h2>
          <p>
            Provide real-time insight for moderators and policy shapers. Merge
            human judgment with automated guardrails to remain agile.
          </p>
          <ul className="list">
            <li>Live heatmaps of risk scores per conversation channel.</li>
            <li>Instant replay of reasoning traces with diffable versions.</li>
            <li>
              Policy testing sandbox to simulate interventions before
              activation.
            </li>
            <li>
              Notification centre wired to paging tools for critical escalations.
            </li>
          </ul>
        </div>
        <div className="panel">
          <div className="panel__header">
            <span className="status status--online" />
            Core Safeguard Loop
          </div>
          <div className="panel__body">
            <ol>
              <li>Risk assessment snapshots every 5 tokens.</li>
              <li>Counter example generation for flagged content.</li>
              <li>Human override channel with reversible rollback.</li>
              <li>Continuous learning feedback to reinforcement buffer.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Resource Toolkit</h2>
          <p>
            Ship faster with pre-built bundles covering compliance, operations,
            and developer experience.
          </p>
        </div>
        <div className="grid grid--resources">
          {resources.map((resource) => (
            <article key={resource.title} className="resource-card">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <Link href={resource.href} className="resource-card__link">
                Download Spec →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Launch With Confidence</h2>
        <p>
          Pair uncensored experiences with immutable accountability. When the
          world pushes back, your agent remains explainable, recoverable, and
          ready to adapt.
        </p>
        <Link href="#" className="button button--primary">
          Get Deployment Checklist
        </Link>
      </section>
    </main>
  );
}

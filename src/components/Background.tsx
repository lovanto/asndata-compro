const statCards = [
  {
    big: "~26%",
    bigClass: "red",
    desc: "global cyber incidents target manufacturing — the most attacked sector worldwide.",
    source: "Source: IBM X-Force Threat Intelligence",
  },
  {
    big: "£1.9B",
    bigClass: "red",
    desc: "Financial impact of a single cyber attack — Jaguar Land Rover UK, August 2025.",
    source: "Source: BBC.com",
  },
  {
    big: "3.64M",
    bigClass: "cyan",
    desc: "Cyber attacks recorded by BSSN in Indonesia, January–July 2025.",
    source: "Source: BSSN Indonesia",
  },
];

const chainNodes = [
  { name: "Tier-1 Suppliers", sub: "Components" },
  { name: "Logistics", sub: "Transportation" },
  { name: "TMMIN", sub: "Manufacturing", hl: true },
  { name: "TAM", sub: "Distributor" },
  { name: "Dealer", sub: "Retail" },
  { name: "Customer", sub: "End User" },
];

export default function Background() {
  return (
    <section id="background" className="bg-alt">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Why Now</div>
          <h2 className="section-title">Background &amp; Urgency</h2>
          <p className="section-desc">
            Manufacturing is the #1 most targeted sector globally. Indonesia&apos;s cybersecurity ranking has declined,
            and Toyota&apos;s supply chain has experienced real attacks.
          </p>
        </div>
        <div className="stat-grid stagger-children">
          {statCards.map((card) => (
            <div className="stat-card" key={card.big}>
              <div className={`stat-big ${card.bigClass}`}>{card.big}</div>
              <div className="stat-card-desc">{card.desc}</div>
              <div className="stat-source">{card.source}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--card-border)",
            borderRadius: "12px",
            padding: "1.8rem",
            marginBottom: "2rem",
          }}
        >
          <div className="section-label" style={{ marginBottom: "0.4rem" }}>
            NCSI Indonesia
          </div>
          <p style={{ color: "var(--grey)", fontSize: "0.9rem", fontWeight: 300, marginBottom: "0.75rem" }}>
            Indonesia&apos;s National Cyber Security Index dropped from rank{" "}
            <strong style={{ color: "var(--white)" }}>48</strong> to <strong style={{ color: "#ff6680" }}>84</strong> in
            2025, signaling increasing national vulnerability.
          </p>
          <p style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.4rem" }}>
            Toyota Indonesia Supply Chain Incidents
          </p>
          <p style={{ color: "var(--grey)", fontSize: "0.82rem", fontWeight: 300 }}>
            In 2023, a cyber attack caused significant manual operational costs. A follow-up incident occurred in 2026 —
            underscoring the urgency of standardized protection across all supplier levels.
          </p>
        </div>
        <div>
          <div className="section-label">Supply Chain Impact Model</div>
          <p style={{ color: "var(--grey)", fontSize: "0.85rem", marginBottom: "1.2rem", marginTop: "0.4rem" }}>
            Every cyber incident can impact the entire Toyota ecosystem — from production stoppages to customer delivery
            delays.
          </p>
          <div className="chain">
            {chainNodes.map((node, i) => (
              <span key={node.name} style={{ display: "contents" }}>
                <div className={`chain-node${node.hl ? " hl" : ""}`}>
                  <div className="chain-node-name" style={node.hl ? { color: "var(--asn-blue-bright)" } : undefined}>
                    {node.name}
                  </div>
                  <div className="chain-node-sub">{node.sub}</div>
                </div>
                {i < chainNodes.length - 1 && <div className="chain-arrow">→</div>}
              </span>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              color: "var(--grey-muted)",
              fontSize: "0.78rem",
              fontStyle: "italic",
              marginTop: "0.75rem",
            }}
          >
            &ldquo;Think as One Toyota Supply Chain&rdquo; — Customer First as the foundation of cyber protection.
          </p>
        </div>
      </div>
    </section>
  );
}

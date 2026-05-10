const pillars = [
  {
    num: "01",
    title: "Awareness Management",
    desc: "Role-based cybersecurity awareness training, realistic phishing simulations, compliance certification tracking, and analytics dashboards to measure human risk across the organization.",
    borderColor: undefined,
    numColor: undefined,
  },
  {
    num: "02",
    title: "Security Operations Center (SOC)",
    desc: "24/7 IT/OT threat monitoring, rapid incident response, OT-specific threat intelligence, and compliance reporting for full real-time visibility across all systems.",
    borderColor: "rgba(61, 110, 245, 0.25)",
    numColor: "rgba(61, 110, 245, 0.12)",
  },
  {
    num: "03",
    title: "Infrastructure & Security Improvement",
    desc: "Secure remote access, vulnerability management, OT/IT network segmentation, and robust IAM solutions with Multi-Factor Authentication (MFA).",
    borderColor: undefined,
    numColor: undefined,
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="bg-alt">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Framework</div>
          <h2 className="section-title">Three Pillars of Manufacturing Resilience</h2>
          <p className="section-desc">
            Manufacturing resilience is driven by three integrated pillars that build a strong and adaptive
            cybersecurity ecosystem.
          </p>
        </div>
        <div className="pillars-grid stagger-children">
          {pillars.map((pillar) => (
            <div
              className="pillar"
              key={pillar.num}
              style={pillar.borderColor ? { borderColor: pillar.borderColor } : undefined}
            >
              <div className="pillar-num" style={pillar.numColor ? { color: pillar.numColor } : undefined}>
                {pillar.num}
              </div>
              <div className="pillar-title">{pillar.title}</div>
              <div className="pillar-desc">{pillar.desc}</div>
            </div>
          ))}
        </div>
        <div className="shared-box">
          <div>
            <div className="section-label">Shared Service Model</div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.7rem" }}>
              Scalable Efficiency for All Suppliers
            </h3>
            <p style={{ color: "var(--grey)", fontSize: "0.88rem", fontWeight: 300 }}>
              Instead of each company implementing People, Process, and Technology independently at high cost, TMMIN
              centralizes them through a managed shared service model — making cybersecurity implementation up to{" "}
              <strong style={{ color: "var(--cyan)" }}>30% more cost-efficient</strong>.
            </p>
          </div>
          <div>
            <div className="shared-item">Leverage economies of scale</div>
            <div className="shared-item">Centralized process control standardization</div>
            <div className="shared-item">Consistent technology architecture across all organizations</div>
            <div className="shared-item">Cloud Services + SOC shared by TMMIN &amp; suppliers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

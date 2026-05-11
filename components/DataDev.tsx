const dataExchange = [
  {
    head: "Data Protection Measures",
    desc: "Data classification (confidential, internal, public) with encryption in transit (TLS, VPN) and encryption at rest.",
  },
  {
    head: "Secure Transfer Mechanisms",
    desc: "SFTP and HTTPS protocols; avoiding insecure channels. Managed File Transfer (MFT) solutions.",
  },
  {
    head: "Access Control",
    desc: "RBAC for data access with authentication, authorization, and logging of all transfers.",
  },
  {
    head: "Governance & Compliance",
    desc: "Data sharing policies, third-party NDAs, and periodic audit reviews.",
  },
];

const systemDev = [
  {
    head: "Best Development Practices",
    desc: "Secure coding standards (OWASP Top 10), code review, static analysis, and vulnerability scanning throughout the lifecycle.",
  },
  {
    head: "Access Control & Authentication",
    desc: "RBAC for developers, MFA for all deployment platforms, and secure management of credentials, API keys, and secrets.",
  },
  {
    head: "Testing & Validation",
    desc: "Penetration testing, CI/CD security gates, and automated testing for vulnerabilities before every deployment.",
  },
  {
    head: "Governance",
    desc: "Enforced secure development policies with regular audits and updates following evolving threats.",
  },
];

export default function DataDev() {
  return (
    <section className="bg-alt">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Data Security &amp; Development</div>
          <h2 className="section-title">
            Secure Data Exchange &amp;
            <br />
            Secure System Development
          </h2>
          <p className="section-desc">
            Comprehensive protection for data in transit and applications under development — embedding security from
            the start.
          </p>
        </div>
        <div className="dd-grid stagger-children">
          <div className="dd-card" style={{ borderTop: "2px solid var(--cyan)" }}>
            <div className="dd-title" style={{ color: "var(--cyan)" }}>
              Secure Data Exchange
            </div>
            {dataExchange.map((item) => (
              <div className="dd-item" key={item.head}>
                <div className="dd-item-head">{item.head}</div>
                <div className="dd-item-desc">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="dd-card" style={{ borderTop: "2px solid var(--asn-blue-bright)" }}>
            <div className="dd-title" style={{ color: "var(--asn-blue-bright)" }}>
              Secure System Development
            </div>
            {systemDev.map((item) => (
              <div className="dd-item" key={item.head}>
                <div className="dd-item-head">{item.head}</div>
                <div className="dd-item-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

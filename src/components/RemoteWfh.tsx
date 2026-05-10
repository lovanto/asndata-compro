const wfhCards = [
  {
    title: "Infrastructure Readiness",
    items: ["Company-issued laptop/PC (standard specs)", "Antivirus / EDR installed", "Stable connection ≥20 Mbps"],
  },
  {
    title: "Security Configuration",
    items: [
      "VPN access (mandatory)",
      "Multi-Factor Authentication (MFA)",
      "Role-based access (least privilege)",
      "DLP — no sensitive data stored locally",
    ],
  },
  {
    title: "System & Application Access",
    items: ["Email (Outlook / Gmail)", "Internal systems (SAP, MES, Talend)", "File sharing (SharePoint, OneDrive)"],
  },
  {
    title: "Network & VPN Monitoring",
    items: ["VPN capacity for concurrent users", "Bandwidth monitoring", "Access activity logging"],
  },
  {
    title: "Data & Backup Strategy",
    items: ["Cloud storage enforced", "Auto backup active", "Version control active"],
  },
  {
    title: "Business Continuity",
    items: ["Backup IT PIC (redundancy)", "Disaster recovery plan", "Critical system prioritization"],
  },
];

const saseItems = [
  {
    head: "Secure Remote Access",
    desc: "Zero Trust Network Access ensures authenticated and encrypted connections from any location.",
  },
  {
    head: "Simplified Infrastructure",
    desc: "Centralized management consolidates network and security operations into a single platform.",
  },
  {
    head: "Full Visibility",
    desc: "Real-time monitoring and centralized logging provide complete visibility over user activity.",
  },
];

export default function RemoteWfh() {
  return (
    <section id="remote">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Remote Workforce</div>
          <h2 className="section-title">Work From Home Cybersecurity</h2>
          <p className="section-desc">
            A comprehensive readiness framework ensures WFH operations remain secure, stable, and compliant — from
            infrastructure to governance.
          </p>
        </div>
        <div className="wfh-grid stagger-children">
          {wfhCards.map((card) => (
            <div className="wfh-card" key={card.title}>
              <div className="wfh-title">{card.title}</div>
              <ul className="wfh-items">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            background: "var(--card)",
            border: "1px solid var(--card-border)",
            borderRadius: "16px",
            padding: "2.5rem",
          }}
        >
          <div className="sase-grid">
            <div>
              <div className="section-label">Advanced Solution</div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.7rem" }}>
                Secure Access Service Edge (SASE)
              </h3>
              <p style={{ color: "var(--grey)", fontSize: "0.88rem", fontWeight: 300, marginBottom: "1rem" }}>
                SASE delivers network and security convergence through cloud, on-premises, or a combination of both — in
                a single unified solution. Whether from home, branch, or manufacturing facility, users get consistent
                security enforcement.
              </p>
              <div className="sase-tags">Components: ZTNA · SWG · NGFW · CASB · DLP · UEBA · SD-WAN · DNS · RBI</div>
            </div>
            <div>
              {saseItems.map((item) => (
                <div className="sase-item" key={item.head}>
                  <div className="sase-item-h">{item.head}</div>
                  <div className="sase-item-d">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

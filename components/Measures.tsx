const measures = [
  {
    n: "1",
    title: "Security Operations Center (SOC)",
    desc: "Centralized 24/7 monitoring, detection, and response. SIEM platform with real-time visibility across all assets.",
    badge: "Mandatory",
    badgeClass: "b-red",
  },
  {
    n: "2",
    title: "Web Gateway",
    desc: "Secure Web Gateway (SWG) to monitor & control all web traffic. Protects against phishing, malware, and non-compliant sites.",
    badge: "Mandatory",
    badgeClass: "b-red",
  },
  {
    n: "3",
    title: "Email Gateway",
    desc: "Secure Email Gateway (SEG) to filter phishing, malicious attachments, and Business Email Compromise (BEC) threats.",
    badge: "Mandatory",
    badgeClass: "b-red",
  },
  {
    n: "4",
    title: "Enforce MFA",
    desc: "Multi-Factor Authentication for all remote access, critical systems, and IAM using passport-based SSO authentication.",
    badge: "Mandatory",
    badgeClass: "b-red",
  },
  {
    n: "5",
    title: "EDR (Endpoint Detection & Response)",
    desc: "Continuous endpoint monitoring with AI-based threat detection, automated response, and anti-ransomware protection.",
    badge: "Mandatory",
    badgeClass: "b-red",
  },
  {
    n: "6",
    title: "Cybersecurity Awareness",
    desc: "Role-based training, phishing simulations, CSIRT formation, and e-learning programs to build the human defense layer.",
    badge: "High",
    badgeClass: "b-blue",
  },
  {
    n: "7",
    title: "Threat & Vulnerability Management",
    desc: "Continuous asset scanning, risk-based vulnerability prioritization, VAPT (Vulnerability Assessment & Penetration Testing).",
    badge: "High",
    badgeClass: "b-blue",
  },
  {
    n: "8",
    title: "Patching & Configuration Management",
    desc: "Structured patch policies with automated deployment and configuration compliance monitoring across all systems.",
    badge: "High",
    badgeClass: "b-blue",
  },
  {
    n: "9",
    title: "Anti-Virus",
    desc: "Basic endpoint protection against malware, trojans, and ransomware with real-time scanning and always-updated definitions.",
    badge: "Medium",
    badgeClass: "b-cyan",
  },
  {
    n: "10",
    title: "Backups & Business Continuity (BCP)",
    desc: "Offline backup strategy (3-2-1 model), documented DR plans, and regular BCP drills to minimize downtime.",
    badge: "High",
    badgeClass: "b-blue",
  },
];

const socFeatures = [
  { icon: "🔍", text: "Real-time visibility into all security events across IT and OT environments" },
  { icon: "⚡", text: "Faster detection and response — threats identified before operational impact" },
  { icon: "🛡️", text: "Confidential incident handling for connected manufacturing environments" },
  { icon: "📊", text: "Compliance reporting aligned with JAMA/JAPIA and national regulations" },
];

export default function Measures() {
  return (
    <section id="measures">
      <div className="container" style={{ textAlign: "left" }}>
        <div className="section-head">
          <div className="section-label">Program Details</div>
          <h2 className="section-title">10 Critical JAMA/JAPIA Security Measures</h2>
          <p className="section-desc">
            Ten priority measures form the foundation of this acceleration program — 21 items targeted for completion
            within 4 months (Priority #1).
          </p>
        </div>
        <div className="measures-grid stagger-children">
          {measures.map((m) => (
            <div className="measure" key={m.n}>
              <div className="measure-n">{m.n}</div>
              <div>
                <div className="measure-title">{m.title}</div>
                <div className="measure-desc">{m.desc}</div>
                <span className={`badge ${m.badgeClass}`}>{m.badge}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <div className="section-label">Highlight: Security Operations Center</div>
          <div className="soc-layout" style={{ marginTop: "1.5rem" }}>
            <div>
              {socFeatures.map((f) => (
                <div className="soc-feature" key={f.icon}>
                  <div className="soc-icon">{f.icon}</div>
                  <div className="soc-text">{f.text}</div>
                </div>
              ))}
              <div style={{ padding: "1rem", fontSize: "0.78rem", color: "var(--grey-muted)" }}>
                Solutions: Splunk · IBM QRadar · Kaspersky KUMA (SIEM)
              </div>
            </div>
            <div className="soc-stat">
              <div className="soc-big">24/7</div>
              <div className="soc-label">
                Continuous Security Operations
                <br />
                IT/OT Threat Monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

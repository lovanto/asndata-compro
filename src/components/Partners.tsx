const partners = [
  {
    tag: "IT Infrastructure & Cyber Security",
    name: "PT. Media Telekomunikasi Mandiri (MTM)",
    desc: "Supports supplier networks in completing JAMA/JAPIA assessments and implementing security improvements with cost efficiency through managed services.",
    list: null,
    borderColor: undefined,
  },
  {
    tag: "System Integration",
    name: "PT. Fujitsu Indonesia",
    desc: "A trusted system integration partner ensuring efficient, reliable, and scalable standard adoption across global supplier ecosystems.",
    list: [
      "End-to-end system integration support",
      "Cybersecurity implementation standardization",
      "Centralized monitoring and data visibility",
      "Technical guidance and best practice alignment",
      "Continuous improvement support",
    ],
    borderColor: "rgba(61, 110, 245, 0.25)",
  },
  {
    tag: "System Development & Maintenance",
    name: "PT. Lumicore Sinergi Awan",
    desc: "A system development and maintenance partner — including upgrades, bug fixes, and regular updates to support operational continuity.",
    list: null,
    borderColor: undefined,
  },
];

const csirtItems = [
  "Access to cyber threat intelligence platform",
  "Abnormal traffic alerts",
  "Incident recovery support",
  "Periodic security advisories",
];

export default function Partners() {
  return (
    <section id="partners">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Delivery Ecosystem</div>
          <h2 className="section-title">Curated Expert Partners</h2>
          <p className="section-desc">
            We align global OEMs, suppliers, logistics partners, and vendors with trusted specialists to deploy
            JAMA/JAPIA-aligned controls consistently and efficiently across regions.
          </p>
        </div>
        <div className="partners-grid stagger-children">
          {partners.map((p) => (
            <div className="partner" key={p.name} style={p.borderColor ? { borderColor: p.borderColor } : undefined}>
              <div className="partner-tag">{p.tag}</div>
              <div className="partner-name">{p.name}</div>
              <div className="partner-desc">{p.desc}</div>
              {p.list && (
                <ul className="partner-list">
                  {p.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="csirt-box">
          <div style={{ flex: 1, minWidth: "220px" }}>
            <p style={{ fontWeight: 700, marginBottom: "0.4rem" }}>National CSIRT Community</p>
            <p style={{ color: "var(--grey)", fontSize: "0.86rem", fontWeight: 300 }}>
              We participate in National CSIRT communities (e.g., BSSN) to access threat intelligence, cyber maturity
              programs, security advisories, and incident recovery support.
            </p>
          </div>
          <div className="csirt-items">
            {csirtItems.map((item) => (
              <div className="csirt-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

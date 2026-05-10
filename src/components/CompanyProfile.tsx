export default function CompanyProfile() {
  return (
    <section id="company" className="bg-alt">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Company Profile</div>
          <h2 className="section-title">CSIRT-led Supply Chain Cybersecurity Accelerator</h2>
          <p className="section-desc">
            Built from the Toyota supply chain program and scaled for global OEMs, we standardize People, Process, and
            Technology controls (JAMA/JAPIA, IT/OT) through managed services and a CSIRT-governed model for predictable,
            multi-region delivery.
          </p>
        </div>
        <div
          className="stagger-children"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.2rem",
            textAlign: "left",
          }}
        >
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <div className="section-label" style={{ marginBottom: "0.5rem" }}>
              Orchestration &amp; Governance
            </div>
            <p style={{ color: "var(--grey)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.9rem" }}>
              One playbook for OEM HQ, regions, plants, and multi-tier suppliers — backed by CSIRT governance for
              incident handling and threat intelligence.
            </p>
            <ul
              style={{ color: "var(--grey)", fontSize: "0.88rem", lineHeight: 1.6, paddingLeft: "1.1rem", margin: 0 }}
            >
              <li>Single reporting and escalation line across IT, OT, logistics, and vendors</li>
              <li>National/regional CSIRT community participation for intel and recovery</li>
              <li>Standardized onboarding and remediation for supplier networks</li>
            </ul>
          </div>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <div className="section-label" style={{ marginBottom: "0.5rem" }}>
              Managed Controls Portfolio
            </div>
            <p style={{ color: "var(--grey)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.9rem" }}>
              Prioritized delivery of the 10 JAMA/JAPIA security measures plus remote/WFH readiness, secure data
              exchange, and secure system development for industrial environments.
            </p>
            <ul
              style={{ color: "var(--grey)", fontSize: "0.88rem", lineHeight: 1.6, paddingLeft: "1.1rem", margin: 0 }}
            >
              <li>Managed SOC, SWG/SEG, MFA, EDR, VAPT, patching, backups, and awareness</li>
              <li>Remote access hardening (zero-trust VPN, MFA, policy enforcement)</li>
              <li>Secure SDLC and OT/IT segmentation aligned to automotive standards</li>
            </ul>
          </div>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <div className="section-label" style={{ marginBottom: "0.5rem" }}>
              Shared Service Economics
            </div>
            <p style={{ color: "var(--grey)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.9rem" }}>
              Centralized People, Process, and Technology services — including 24/7 SOC — delivered as a shared model
              with up to <strong style={{ color: "var(--cyan)" }}>30% cost efficiency</strong> from scale.
            </p>
            <ul
              style={{ color: "var(--grey)", fontSize: "0.88rem", lineHeight: 1.6, paddingLeft: "1.1rem", margin: 0 }}
            >
              <li>Curated partners for infrastructure, integration, and development</li>
              <li>Standard architectures and governance reporting across regions</li>
              <li>Playbooks to accelerate rollout for suppliers, logistics, and vendors</li>
            </ul>
          </div>
        </div>
        <div className="shared-box" style={{ marginTop: "2rem" }}>
          <div>
            <div className="section-label">Value to Global Clients</div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.7rem" }}>
              One orchestrator, consistent outcomes worldwide
            </h3>
            <p style={{ color: "var(--grey)", fontSize: "0.88rem", fontWeight: 300 }}>
              OEM leadership and supplier CISOs get unified governance, faster remediation, and measurable readiness
              through a CSIRT-led managed service model.
            </p>
          </div>
          <div>
            <div className="shared-item">Single coordination point across regions and supplier tiers</div>
            <div className="shared-item">Managed services mapped to JAMA/JAPIA and global automotive standards</div>
            <div className="shared-item">Threat intelligence and incident handling through CSIRT communities</div>
            <div className="shared-item">Cost-efficient rollout leveraging shared platforms, SOC, and playbooks</div>
          </div>
        </div>
      </div>
    </section>
  );
}

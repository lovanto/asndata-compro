import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="grid-bg"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>
      <div className="hero-content">
        <div className="hero-logo">
          <Image src="/logo.png" alt="ASN" width={200} height={72} priority style={{ width: "auto" }} />
        </div>
        <div className="hero-tag">
          <span className="hero-tag-dot"></span>
          Global Automotive OEM · CSIRT-led Program
        </div>
        <h1>
          Supply Chain
          <br />
          <em>Cyber Security</em>
          <br />
          Acceleration Program
        </h1>
        <p className="hero-desc">
          Protecting the entire Toyota supply chain ecosystem — from Tier-1 suppliers to dealers — through standardized,
          managed cybersecurity solutions aligned with JAMA/JAPIA 2026 targets.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#background" className="btn-primary">
            Explore Program
          </a>
          <a href="#contact" className="btn-ghost">
            Contact CSIRT Team
          </a>
        </div>
        <div className="hero-metrics">
          <div>
            <div className="hero-metric-num">
              245<span>+</span>
            </div>
            <div className="hero-metric-label">Participating Suppliers</div>
          </div>
          <div>
            <div className="hero-metric-num">60</div>
            <div className="hero-metric-label">JAMA/JAPIA Control Items</div>
          </div>
          <div>
            <div className="hero-metric-num">
              100<span>%</span>
            </div>
            <div className="hero-metric-label">Target Dec 2026</div>
          </div>
          <div>
            <div className="hero-metric-num">
              30<span>%</span>
            </div>
            <div className="hero-metric-label">Cost Efficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
}

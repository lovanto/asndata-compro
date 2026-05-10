const jamaCards = [
  { year: "2023", items: "28 Item (V.1)", achievement: "47% (114/245)", pct: 47, active: false },
  { year: "2024", items: "60 Item (V.2)", achievement: "13% (32/245)", pct: 13, active: false },
  { year: "2025", items: "60 Item", achievement: "34% (84/245)", pct: 34, active: false },
  { year: "2026", items: "100% of 60 Items", achievement: "2.0 / 2.0", pct: 100, active: true, target: true },
];

export default function JamaJapia() {
  return (
    <section id="jama">
      <div className="container">
        <div className="section-head">
          <div className="section-label">Standards &amp; Achievements</div>
          <h2 className="section-title">JAMA/JAPIA Implementation Progress</h2>
          <p className="section-desc">
            Guidelines from the Japan Automotive Manufacturing Association &amp; Japan Auto Parts Industries
            Association, rolled out gradually to 245 TMMIN suppliers since 2023.
          </p>
        </div>
        <div className="jama-grid stagger-children">
          {jamaCards.map((card) => (
            <div className={`jama-card${card.active ? " active" : ""}`} key={card.year}>
              <div className="jama-year">{card.year}</div>
              <div className="jama-meta">Control Items</div>
              <div className="jama-val">{card.items}</div>
              <div className="jama-meta" style={{ marginTop: "0.5rem" }}>
                {card.target ? "Average Score" : "Achievement"}
              </div>
              <div
                className={`jama-val${card.target ? " target" : ""}`}
                style={{ color: card.target ? undefined : "#ff6680" }}
              >
                {card.achievement}
              </div>
              <div className="pbar">
                <div className={`pbar-fill${card.target ? " c" : ""}`} style={{ width: `${card.pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "rgba(0, 229, 255, 0.04)",
            border: "1px solid var(--cyan-border)",
            borderRadius: "12px",
            padding: "1.5rem",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem" }}>Current Status (FY26)</p>
          <p style={{ color: "var(--grey)", fontSize: "0.88rem", fontWeight: 300 }}>
            Average supplier JAMA/JAPIA score: <strong style={{ color: "var(--cyan)" }}>1.56 / 2.00</strong> —
            Self-Assessment runs until 30 April 2026. The program focuses on improvement across three dimensions:{" "}
            <strong>People</strong> (education &amp; training), <strong>Process</strong> (incident response workflows),
            and <strong>Technology</strong> (tools &amp; automation).
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const navLinks = [
  { href: "#background", label: "Background" },
  { href: "#jama", label: "JAMA/JAPIA" },
  { href: "#pillars", label: "Three Pillars" },
  { href: "#measures", label: "10 Measures" },
  { href: "#company", label: "Company" },
  { href: "#partners", label: "Partners" },
  { href: "#remote", label: "WFH Security" },
];

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <Image
          src="/logo.png"
          alt="ASN – Nusantara Cyber Accelerator"
          width={120}
          height={38}
          style={{ width: "auto" }}
        />
      </div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

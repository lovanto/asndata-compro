import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Image src="/logo.png" alt="ASN" width={90} height={28} style={{ width: "auto" }} />
      <div className="footer-copy">
        Nusantara Cyber Accelerator · TMMIN Supply Chain Cyber Security Acceleration Program 2026
      </div>
      <div className="footer-copy">PT Toyota Motor Manufacturing Indonesia · JAMA/JAPIA Standard v2</div>
    </footer>
  );
}

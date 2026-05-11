import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-logo">
            <Image src="/logo.png" alt="ASN" width={150} height={52} style={{ width: "auto" }} />
          </div>
          <div className="contact-kicker">TMMIN-CSIRT</div>
          <h2 className="contact-title">Contact Our Team</h2>
          <p className="contact-sub">
            The TMMIN CSIRT team is ready to support suppliers, logistics partners, and vendors throughout this program.
          </p>
          <div className="contact-row">
            <div className="contact-item">
              <div className="cl">Email</div>
              <div className="cv">cs@asndata.id</div>
            </div>
            <div className="contact-item">
              <div className="cl">Phone / WhatsApp</div>
              <div className="cv">+62 811-9056-798</div>
            </div>
          </div>
          <a href="mailto:cs@asndata.id" className="btn-primary">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}

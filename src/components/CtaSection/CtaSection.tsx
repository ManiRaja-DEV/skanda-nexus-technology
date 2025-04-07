import "./cta-section.css";

import logo from "../../assets/logo-copy.svg";

function CtaSection() {
  return (
    <>
      <div className="cta-section__hero">
        <div className="cta-section__logo"><div className="logo"><img src={logo} alt="Logo" width={70} height={70} /></div></div>
        <div className="cta-section__content">
          <h3 className="cta-section__heading">
            Today, Skanda Nexus Continues to Thrive as a Leading Digital Product
            Agency.....
          </h3>
          <p className="cta-section__text">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring your
            digital ideas to life.
          </p>
        </div>
      </div>
      <div className="cta-section__main">
        <div className="cta-section__main-content">
          <h3 className="cta-section__main-heading">Welcome to Skanda Nexus</h3>
          <p className="cta-section__main-text">
            Where collaboration, Expertise, and Client-Centricity Intersect to
            Shape the Future of Digital Innovation.
          </p>
        </div>
        <a href="/#mobileapp/contact-us#contact-form" className="cta-section__main-btn">
          Start Project
        </a>
      </div>
    </>
  );
}

export default CtaSection;

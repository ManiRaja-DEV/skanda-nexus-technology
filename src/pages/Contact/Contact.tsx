import { Envelope, Phone, MapPin } from "@phosphor-icons/react";

import "./contact.css";
import Socials from "../../components/Socials/Socials";
import Faq from "../../components/Faq/Faq";
import CtaSection from "../../components/CtaSection/CtaSection";
import PageHero from "../../components/PageHero/PageHero";
import Form from "../../components/Form/Form";

function ContactPage() {
  const heroContent = {
    heading: "Contact Us",
    description:
      "Get in touch with us today and let us help you with any questions or inquiries you may have.",
  };

  const faqHeroContent = {
    heading: "Frequently Asked Questions",
    description:
      "Still you have any questions? Contact our Team via hr@skandanexus.com",
  };

  return (
    <div className="contact">
      <PageHero
        heading={heroContent.heading}
        description={heroContent.description}
      />
      <section className="contact__details">
        <a href="mailto:contact@skandanexus.com" className="contact__info">
          <Envelope size={24} color="#9eff00" weight="fill" className="contact_icon" />
          <p className="contact__info-text">contact@skandanexus.com</p>
        </a >
        <a href="tel:+919385446681" className="contact__info">
          <Phone size={24} color="#9eff00" weight="fill" className="contact_icon" />
          <p className="contact__info-text">+91 93854 46681</p>
        </a >
        <a href="" className="contact__info">
          <MapPin size={24} color="#9eff00" weight="fill" className="contact_icon" />
          <p className="contact__info-text">Get Location</p>
        </a >
      </section>
      <section id="contact-form" className="contact__form">
        <Form />
      </section>
      <section className="contact__socials">
        <div className="contact__operating-days">
          <span className="contact__operating-days-text">Operating Days</span>
          <span className="contact__operating-item">Monday to Friday</span>
        </div>
        <span className="contact__socials-separator"></span>
        <Socials />
      </section>
      <PageHero
        heading={faqHeroContent.heading}
        description={faqHeroContent.description}
      />
      <section className="contact__faq">
        <Faq />
      </section>
      <section className="cta-section">
        <CtaSection />
      </section>
    </div>
  );
}

export default ContactPage;

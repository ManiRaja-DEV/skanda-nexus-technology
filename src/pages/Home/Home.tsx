import { Code, GearFine, Terminal } from "@phosphor-icons/react";
import PageHero from "../../components/PageHero/PageHero";

import "./home.css";
import Faq from "../../components/Faq/Faq";
import { Link } from "wouter";
import Form from "../../components/Form/Form";

function Home() {
  const servicesContent = {
    heading: "Our Services and Products",
    description:
      "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
  };

  const whyUsContent = {
    heading: "Why Choose Skanda Nexus?",
    description:
      "At Skanda Nexus, we deliver more than just services—we create customized IT, HR, and Training solutions that are purpose-built to match your needs and deliver measurable, lasting impact.We aim to be a trusted partner in your growth, driving innovation and efficiency at every step.",
  };

  const faqHeroContent = {
    heading: "Frequently Asked Questions",
    description:
      "Still you have any questions? Contact our Team via hr@skandanexus.com",
  };

  const subHeroContent = {
    heading: "Thank you for your Interest in Skanda Nexus.",
    description:
      "We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.",
  };

  return (
    <div className="home">
      <section className="home__hero">
        <h1 className="home__tagline">
          Building the Future: Innovative Products, HR Expertise & IT
          Intelligence in One Partner
        </h1>
        <p className="home__sub-tagline">
          For <span className="home__btn">Startups</span>,
          <span className="home__btn">Enterprise Leaders</span>,
          <span className="home__btn">Innovators</span>, and
          <span className="home__btn">Growing Organizations</span>
        </p>
        <div className="home__cta">
          <Link
            to="/skanda-nexus-technology/about-us"
            className="home__cta-btn home__cta-btn--about"
          >
            About Us
          </Link>
          <Link
            to="/skanda-nexus-technology/contact-us"
            className="home__cta-btn"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <PageHero
        heading={servicesContent.heading}
        description={servicesContent.description}
      />
      <div className="careers__type-wrapper careers__type-wrapper--home ">
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <Code size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">Vehicle GPS Tracking Software</h4>
          <p className="careers__type-content">
            Real-time location tracking, route optimization, fuel monitoring,
            and driver behavior insights.
          </p>
          <a
            href="/skanda-nexus-technology/products"
            className="careers__apply-btn"
          >
            Learn More
          </a>
        </div>
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <Terminal size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">HR Services</h4>
          <p className="careers__type-content">
            Talent acquisition, performance management, payroll, and compliance
            support.
          </p>
          <a
            href="/services#hrservices"
            className="careers__apply-btn"
          >
            Learn More
          </a>
        </div>
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <GearFine size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">Website Development</h4>
          <p className="careers__type-content">
            Custom website solutions with UI/UX design, SEO, and e-commerce
            features.
          </p>
          <a
            href="/services#webdevelopment"
            className="careers__apply-btn"
          >
            Learn More
          </a>
        </div>
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <Code size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">Mobile App Development</h4>
          <p className="careers__type-content">
            High-quality iOS & Android app development with seamless user
            experience.
          </p>
          <a
            href="/services#mobileapp"
            className="careers__apply-btn"
          >
            Learn More
          </a>
        </div>
        <div className="careers__type-item">
          <span className="careers__type-icon">
            <Terminal size={28} color="#9eff00" weight="fill" />
          </span>
          <h4 className="careers__type-name">Training and Development</h4>
          <p className="careers__type-content">
            Corporate training, certification programs, soft skills, leadership,
            and psychological training.
          </p>
          <a
            href="training-development"
            className="careers__apply-btn"
          >
            Learn More
          </a>
        </div>
      </div>
      <PageHero
        heading={whyUsContent.heading}
        description={whyUsContent.description}
      />
      <section className="careers__list">
        <div className="careers__list-item">
          <h2 className="careers__list-heading">Industry Expertise</h2>
          <p className="careers__list-description">
            Our multidisciplinary team brings in-depth knowledge across HR, IT,
            GPS tracking, and Training &amp; Development, ensuring solutions
            that are both relevant and future-ready. We stay ahead of industry
            trends to equip your business with a competitive edge.
          </p>
        </div>
        <div className="careers__list-item">
          <h2 className="careers__list-heading">Client-Centric Approach</h2>
          <p className="careers__list-description">
            Your business is our priority. We craft strategies that are aligned
            with your unique challenges, goals, and growth plans. Every solution
            is built with your long-term success and satisfaction in mind.
          </p>
        </div>
        <div className="careers__list-item">
          <h2 className="careers__list-heading">Results-Driven</h2>
          <p className="careers__list-description">
            We are focused on real outcomes—boosting workforce capability,
            optimizing operations, and driving business efficiency. Our
            performance metrics are designed around what matters most to you.
          </p>
        </div>
        <div className="careers__list-item">
          <h2 className="careers__list-heading">Long-Term Partnership</h2>
          <p className="careers__list-description">
            Beyond project delivery, we offer continuous support and agile
            solutions that evolve with your business needs. We grow with you,
            adapting to your goals as they change and scale.
          </p>
        </div>
      </section>
      <PageHero
        heading={faqHeroContent.heading}
        description={faqHeroContent.description}
      />
      <Faq />
      <PageHero
        heading={subHeroContent.heading}
        description={subHeroContent.description}
        isSubHero={true}
      />
      <section id="contact-form" className="contact__form">
        <Form />
      </section>
    </div>
  );
}

export default Home;

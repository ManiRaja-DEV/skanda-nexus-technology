import { Code, Terminal } from "@phosphor-icons/react";
import PageHero from "../../components/PageHero/PageHero";

import "./careers.css";
import Form from "../../components/Form/Form";

function Careers() {
  const heroContent = {
    heading: "Join Our Team at Skanda Nexus",
    description:
      "Unlock your potential and join our team of innovators and problem solvers.",
  };

  return (
    <div className="careers">
      <PageHero
        heading={heroContent.heading}
        description={heroContent.description}
      />
      <section className="careers__item">
        <div className="careers__item-header">
          <h2 className="careers__heading">
            Welcome to Skanda Nexus, where talent meets opportunity!
          </h2>
          <p className="careers__description">
            At Skanda Nexus, we believe that the success of our agency lies in
            the talent, passion, and dedication of our team members. We are a
            digital product agency that thrives on innovation, creativity, and
            collaboration. If you're ready to make a difference and contribute
            to cutting-edge projects, we invite you to explore career
            opportunities with us.
          </p>
          <p className="careers__btn">Why Work at Skanda Nexus?</p>
        </div>
      </section>
      <section className="careers__list">
        <div className="careers__list-item">
          <h2 className="careers__list-heading">
            Innovative and Impactful Projects
          </h2>
          <p className="careers__list-description">
            At Skanda Nexus, you'll have the opportunity to work on exciting and
            impactful projects that shape the digital landscape. From designing
            intuitive user interfaces to developing robust software solutions,
            you'll be part of a team that creates products that make a
            difference.
          </p>
        </div>
        <div className="careers__list-item">
          <h2 className="careers__list-heading">Supportive Environment</h2>
          <p className="careers__list-description">
            At Skanda Nexus, you'll have the opportunity to work on exciting and
            impactful projects that shape the digital landscape. From designing
            intuitive user interfaces to developing robust software solutions,
            you'll be part of a team that creates products that make a
            difference.
          </p>
        </div>
        <div className="careers__list-item">
          <h2 className="careers__list-heading">
            Continuous Learning and Growth
          </h2>
          <p className="careers__list-description">
            We believe in investing in our team's growth and development. We
            provide opportunities for continuous learning, whether it's through
            workshops, training programs, or attending industry conferences. At
            Skanda Nexus, you'll have the chance to expand your skill set and
            stay up-to-date with the latest trends and technologies.
          </p>
        </div>
        <div className="careers__list-item">
          <h2 className="careers__list-heading">
            Challenging and Rewarding Work
          </h2>
          <p className="careers__list-description">
            Our projects are challenging, but the rewards are even greater. We
            tackle complex problems and push ourselves to deliver innovative
            solutions. You'll be empowered to take ownership of your work, make
            a real impact, and see your ideas come to life.
          </p>
        </div>
      </section>
      <section className="careers__item">
        <div className="careers__item-header">
          <h2 className="careers__heading">Current Openings</h2>
          <p className="careers__description">
            We are always on the lookout for talented individuals who are
            passionate about creating exceptional digital experiences. Whether
            you're a designer, engineer, project manager, or have skills that
            align with our agency's mission, we encourage you to explore our
            open positions.
          </p>
        </div>
        <h3 className="careers__type">Development Job Openings</h3>
        <div className="careers__type-wrapper">
          <div className="careers__type-item">
            <span className="careers__type-icon">
              <Code size={28} color="#9eff00" weight="fill" />
            </span>
            <h4 className="careers__type-name">Mobile Application Developer</h4>
            <p className="careers__type-content">
              We are looking for a skilled Mobile Application Developer with 1
              to 3 years of experience to join our team. The ideal candidate
              should have experience developing mobile applications for Android
              and/or iOS platforms and be proficient in relevant frameworks and
              technologies.
            </p>
            <a href="#career-form" className="careers__apply-btn">Apply Now</a>
          </div>
          <div className="careers__type-item">
            <span className="careers__type-icon">
              <Terminal size={28} color="#9eff00" weight="fill" />
            </span>
            <h4 className="careers__type-name">
              Business Development Executive (IT Services/Consultancy)
            </h4>
            <p className="careers__type-content">
              We are looking for a Business Development Executive to drive sales
              and expand our client base for IT services and consultancy. The
              ideal candidate should have experience in lead generation, client
              acquisition, and relationship management in the IT sector.
            </p>
            <a href="#career-form" className="careers__apply-btn">Apply Now</a>
          </div>
        </div>
      </section>
      <section id="career-form" className="careers__form">
        <Form isCareersForm={true} />
      </section>
      {/* <section className="cta-section">
        <CtaSection />
      </section> */}
    </div>
  );
}

export default Careers;

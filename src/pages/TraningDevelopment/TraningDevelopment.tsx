import { AddressBook, Alarm, Globe, TrendUp } from "@phosphor-icons/react";
import PageHero from "../../components/PageHero/PageHero";

function TrainingDevelopment() {
  const heroContent = {
    heading: "Training and Development",
    description:
      "Get in touch with us today and let us help you with any questions or inquiries you may have.",
  };

  const subHeroContent = {
    heading: "Let us Bring your Ideas to Life in the Digital World.",
    description:
      "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
  };

  return (
    <div className="training-development">
      <PageHero
        heading={heroContent.heading}
        description={heroContent.description}
      />
      <section className="services__wrapper">
        <div className="services__item">
          <div className="services__item-header">
            <h2 className="services__heading">Training and Development</h2>
            <p className="services__description">
              At Skanda Nexus, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it's about creating seamless and intuitive user
              experiences.
            </p>
            <p className="services__btn">
              Our Training and Development services include:
            </p>
          </div>
          <h3 className="services__type">Training and Development</h3>
          <div className="services__type-wrapper">
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Advanced Skill Development Programs
              </h4>
              <p className="services__type-content">
                Empowering professionals with cutting-edge knowledge in IT, HR,
                leadership, and management.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Alarm size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Tailored Corporate Training Solutions
              </h4>
              <p className="services__type-content">
                Custom-designed learning modules aligned with organizational
                goals and workforce needs.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <AddressBook size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Leadership & Soft Skills Mastery
              </h4>
              <p className="services__type-content">
                Enhancing communication, collaboration, critical thinking, and
                emotional intelligence for career growth.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Technology & Innovation Training
              </h4>
              <p className="services__type-content">
                Covering emerging trends such as artificial intelligence, cloud
                computing, cybersecurity, and data science.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Workplace Wellness & Mental Resilience Programs
              </h4>
              <p className="services__type-content">
                Promoting employee well-being through stress management,
                mindfulness, and balanced work-life integration.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Accredited Certification Courses
              </h4>
              <p className="services__type-content">
                Helping individuals achieve globally recognized credentials to
                boost career prospects and professional credibility.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Virtual Learning & Digital Classrooms
              </h4>
              <p className="services__type-content">
                Providing interactive and flexible online training solutions for
                remote and global teams.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PageHero
        heading={subHeroContent.heading}
        description={subHeroContent.description}
        isSubHero={true}
        page="trainingAndDevelopment"
      />
    </div>
  );
}

export default TrainingDevelopment;

import PageHero from "../../components/PageHero/PageHero";
import aboutImage from "../../assets/about-image.svg";
import "./about.css";
import CtaSection from "../../components/CtaSection/CtaSection";

function About() {
  const heroContent = {
    heading: "About Us",
    description:
      "Welcome to Skanda Nexus, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.",
  };
  return (
    <div className="about">
      <PageHero
        heading={heroContent.heading}
        description={heroContent.description}
      />
      <section className="about__main">
        <div className="about__main-content">
          <h2 className="about__main-heading">About Skanda Nexus</h2>
          <p className="about__main-text">
            At Skanda Nexus Technologies, we empower businesses with
            cutting-edge IT, HR, and Training solutions tailored to their unique
            needs. Our expertise spans vehicle GPS tracking, website and mobile
            app development, HR services, and corporate training programs. We
            are committed to innovation, client success, and delivering
            measurable results. Backed by industry expertise and a
            client-centric approach, we help businesses scale efficiently.
            Partner with us to drive growth and transformation.
          </p>
        </div>
        <div className="about__image-container">
          <img src={aboutImage} alt="About Image" className="about__image" />
        </div>
      </section>
      <section className="about__content">
        <h3 className="about__content-tagline">Skanda Nexus Way</h3>
        <div className="about__content-wrapper">
          <div className="about__content-item">
            <div className="about__content-header">
              <span className="about__content-count">01</span>
              <h1 className="about__content-heading">Innovate</h1>
            </div>
            <p className="about__content-description">
              At Skanda Nexus, innovation is at the heart of everything we do.
              We believe that by fostering creativity, we can develop solutions
              that not only meet but exceed our clients&#39; expectations. Our
              team is dedicated to transforming innovative ideas into tangible
              successes, ensuring that our clients thrive in a competitive
              digital landscape.
            </p>
          </div>
          <div className="about__content-item">
            <div className="about__content-header">
              <span className="about__content-count">02</span>
              <h1 className="about__content-heading">Digital Excellence</h1>
            </div>
            <p className="about__content-description">
              We are committed to delivering top-tier digital solutions that set
              industry standards. Our focus on excellence ensures that every
              project is executed with precision, from initial concept to final
              implementation. By leveraging the latest technologies and best
              practices, we drive digital excellence that propels businesses
              forward.
            </p>
          </div>
          <div className="about__content-item">
            <div className="about__content-header">
              <span className="about__content-count">03</span>
              <h1 className="about__content-heading">Our Mission</h1>
            </div>
            <p className="about__content-description">
              Your business growth is our primary objective. We tailor our
              services to align with your unique goals, providing strategies and
              solutions that foster sustainable development. At Skanda Nexus, we
              view your success as a reflection of our commitment and expertise.
            </p>
          </div>
          <div className="about__content-item">
            <div className="about__content-header">
              <span className="about__content-count">04</span>
              <h1 className="about__content-heading">Digital Innovation</h1>
            </div>
            <p className="about__content-description">
              In the rapidly evolving digital world, innovation is key to
              staying ahead. We empower your business by integrating
              cutting-edge technologies and creative strategies, ensuring you
              remain at the forefront of your industry. Our innovative approach
              transforms challenges into opportunities, driving continuous
              improvement.
            </p>
          </div>
          <div className="about__content-item">
            <div className="about__content-header">
              <span className="about__content-count">05</span>
              <h1 className="about__content-heading">Smarter Future</h1>
            </div>
            <p className="about__content-description">
              We design solutions that are not only effective today but also
              pave the way for a smarter future. By anticipating market trends
              and technological advancements, we equip your business with the
              tools needed to adapt and thrive. Our forward-thinking strategies
              ensure long-term success in an ever- changing landscape.
            </p>
          </div>
          <div className="about__content-item">
            <div className="about__content-header">
              <span className="about__content-count">06</span>
              <h1 className="about__content-heading">Beyond Limits</h1>
            </div>
            <p className="about__content-description">
              At Skanda Nexus, we push the boundaries to deliver solutions that
              transcend traditional digital experiences. Our holistic approach
              considers all facets of your business, ensuring that our
              strategies drive comprehensive growth. We go beyond the digital
              realm to create value that resonates across all aspects of your
              organization.
            </p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <CtaSection />
      </section>
    </div>
  );
}

export default About;

import { AddressBook, Alarm, Globe, TrendUp } from "@phosphor-icons/react";
import PageHero from "../../components/PageHero/PageHero";

import "./services.css";

function Services() {
  const heroContent = {
    heading: "Our Services",
    description:
      "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
  };

  const subHeroContent = {
    heading: "Let us Bring your Ideas to Life in the Digital World.",
    description:
      "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
  };

  return (
    <div className="services">
      <PageHero
        heading={heroContent.heading}
        description={heroContent.description}
      />
      <section className="services__wrapper">
        <div id="hrservices" className="services__item">
          <div className="services__item-header">
            <div className="services__image-container"></div>
            <div className="services__item-content">
              <h2 className="services__heading">
                Business Process Outsourcing (BPO) for HR
              </h2>
              <p className="services__description">
                From customer support to backend tasks, we handle it all.
                Maximize productivity while reducing operational costs. Your
                process, our precision—outsourced with excellence.
              </p>
              <p className="services__btn">Our BPO services include:</p>
            </div>
          </div>
          {/* <h3 className="services__type">
            Business Process Outsourcing (BPO) for HR
          </h3> */}
          <div className="services__type-wrapper">
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">End-to-End HR Outsourcing</h4>
              <p className="services__type-content">
                Empower your business with seamless HR operations—payroll,
                compliance, and workforce management—all handled with precision,
                so you can focus on growth.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Alarm size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Temporary Staffing & Contract Hiring
              </h4>
              <p className="services__type-content">
                Agility meets expertise—scale your workforce effortlessly with
                on-demand professionals who fit right in, driving efficiency
                without long-term commitments.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <AddressBook size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Vendor & Workforce Management
              </h4>
              <p className="services__type-content">
                Turn vendor relationships into strategic assets—our solutions
                enhance efficiency, compliance, and workforce synergy for smooth
                business operations.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Global HR Solutions for Multinational Companies
              </h4>
              <p className="services__type-content">
                Expand without limits—our tailored HR solutions ensure
                compliance, workforce stability, and seamless talent mobility
                across international borders.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                End-to-End Recruitment Services
              </h4>
              <p className="services__type-content">
                From talent discovery to onboarding, we architect a hiring
                process that attracts the right people at the right time,
                fueling your company's vision.
              </p>
            </div>
          </div>
        </div>
        <div className="services__item">
          <div className="services__item-header">
            <div className="services__image-container"></div>
            <div className="services__item-content">
              <h2 className="services__heading">
                Recruitment & Talent Acquisition
              </h2>
              <p className="services__description">
                Find the right talent, the first time. We specialize in
                strategic hiring that aligns with your vision. From sourcing to
                onboarding, we cover every step. Empowering your teams with
                future-ready professionals.
              </p>
              <p className="services__btn">
                Our Recruitment & Talent services include:
              </p>
            </div>
          </div>
          {/* <h3 className="services__type">Recruitment & Talent Acquisition</h3> */}
          <div className="services__type-wrapper">
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                End-to-end recruitment services
              </h4>
              <p className="services__type-content">
                From job posting to onboarding, we handle it all. Our
                recruitment process ensures the right talent for your business.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Alarm size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Executive search &amp; headhunting
              </h4>
              <p className="services__type-content">
                Find top-tier professionals for leadership roles. We identify,
                evaluate, and recruit the best industry leaders.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <AddressBook size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Recruitment process outsourcing (RPO)
              </h4>
              <p className="services__type-content">
                Streamline hiring with our expert RPO services. We manage talent
                acquisition efficiently for sustained growth.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">Campus hiring solutions</h4>
              <p className="services__type-content">
                Connect with young talent through strategic campus hiring. We
                help you build a strong entry-level workforce.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">Employer branding</h4>
              <p className="services__type-content">
                Enhance your company's reputation to attract top talent. Our
                branding strategies position you as an employer of choice.
              </p>
            </div>
          </div>
        </div>
        <div className="services__item">
          <div className="services__item-header">
            <div className="services__image-container"></div>
            <div className="services__item-content">
              <h2 className="services__heading">HR Strategy & Advisory</h2>
              <p className="services__description">
                Build a people-first culture with smart HR strategies. We craft
                agile frameworks that scale with your business. Our advisory
                blends insight with innovation. Drive growth with a workforce
                aligned to your goals.
              </p>
              <p className="services__btn">
                Our HR Strategy & Advisory services include:
              </p>
            </div>
          </div>
          {/* <h3 className="services__type">HR Strategy & Advisory</h3> */}
          <div className="services__type-wrapper">
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">HR policy development</h4>
              <p className="services__type-content">
                Craft clear and effective HR policies for your business. We
                ensure compliance and alignment with company goals.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Alarm size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Workforce planning & optimization
              </h4>
              <p className="services__type-content">
                Strategic workforce planning for operational efficiency. We help
                you allocate resources for maximum productivity.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <AddressBook size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Organizational restructuring
              </h4>
              <p className="services__type-content">
                Revamp your company structure for better performance. Our expert
                strategies drive growth and efficiency.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Employee engagement strategies
              </h4>
              <p className="services__type-content">
                Boost workplace morale and productivity with engagement
                initiatives. We design programs that foster motivation.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Compensation & benefits benchmarking
              </h4>
              <p className="services__type-content">
                Ensure competitive pay and benefits to attract talent. We
                analyze market trends for fair and strategic compensation.
              </p>
            </div>
          </div>
        </div>
        <div className="services__item">
          <div className="services__item-header">
            <div className="services__image-container"></div>
            <div className="services__item-content">
              <h2 className="services__heading">
                HR Compliance & Legal Support
              </h2>
              <p className="services__description">
                Stay ahead of regulations with expert HR compliance. We simplify
                legal complexities and reduce risks. From audits to policy
                updates, we’ve got you covered. Secure, lawful, and always
                HR-ready.
              </p>
              <p className="services__btn">
                Our HR Compliance & Legal Support services include:
              </p>
            </div>
          </div>
          {/* <h3 className="services__type">HR Compliance & Legal Support</h3> */}
          <div className="services__type-wrapper">
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Background verification (BGV) checks
              </h4>
              <p className="services__type-content">
                Thorough screening to ensure reliable hires. We verify identity,
                employment history, and more.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Alarm size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Employment history verification
              </h4>
              <p className="services__type-content">
                Confirm candidates past job experiences accurately. Our checks
                ensure transparency and trust.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <AddressBook size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">Criminal record checks</h4>
              <p className="services__type-content">
                Mitigate hiring risks with detailed criminal background checks.
                We ensure compliance and workplace safety.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Education & certification verification
              </h4>
              <p className="services__type-content">
                Verify academic credentials for role suitability. We
                authenticate degrees, certifications, and professional training.
              </p>
            </div>
          </div>
        </div>
        <div id="webdevelopment" className="services__item">
          <div className="services__item-header">
            <div className="services__image-container"></div>
            <div className="services__item-content">
              <h2 className="services__heading">Web Development Services</h2>
              <p className="services__description">
                In today’s digital-first world, a strong online presence is more
                than just a necessity—it’s a game-changer. At Skanda Nexus
                Technologies, we craft cutting-edge web solutions that are fast,
                secure, and scalable, helping businesses stand out in the
                competitive digital landscape. Whether you need a sleek
                corporate website, a high-performance web app, or a dynamic CMS
                platform, we bring your vision to life with precision and
                innovation.
              </p>
              <p className="services__btn">
                Our Web Development services include:
              </p>
            </div>
          </div>
          {/* <h3 className="services__type">Web Development</h3> */}
          <div className="services__type-wrapper">
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">Front-End Development</h4>
              <p className="services__type-content">
                We design stunning, responsive, and intuitive user interfaces
                that leave a lasting impression. Using HTML, CSS, JavaScript,
                React, and Angular, we create seamless experiences that engage
                and convert visitors.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Alarm size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">Back-End Development</h4>
              <p className="services__type-content">
                A website’s true power lies behind the scenes. Our Node.js,
                Python (Django/Flask), PHP (Laravel), and Ruby on Rails
                expertise ensures high performance, security, and scalability,
                making your web applications run like clockwork.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <AddressBook size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">Custom Web Applications</h4>
              <p className="services__type-content">
                Every business is unique, and so should be its web solutions.
                From interactive portals to enterprise-grade applications, we
                develop tailor-made web solutions that align perfectly with your
                business goals.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">CMS Development</h4>
              <p className="services__type-content">
                Managing content shouldn’t be a hassle. We build and customize
                WordPress, Drupal, and headless CMS platforms, giving you full
                control over your website with easy-to-use interfaces and
                flexible content management tools.
              </p>
            </div>
          </div>
        </div>
        <div id="mobileapp" className="services__item">
          <div className="services__item-header">
            <div className="services__image-container"></div>
            <div className="services__item-content">
              <h2 className="services__heading">Mobile App Development</h2>
              <p className="services__description">
                At Skanda Nexus Technologies, we don’t just build mobile apps—we
                craft seamless digital experiences that engage users, drive
                business growth, and stand out in the competitive market.
                Whether you need a high-performance native app or a versatile
                cross-platform solution, our team ensures cutting-edge
                innovation tailored to your needs.
              </p>
              <p className="services__btn">
                Our Mobile App Development services include:
              </p>
            </div>
          </div>
          {/* <h3 className="services__type">Mobile App Development</h3> */}
          <div className="services__type-wrapper">
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Native iOS & Android Development
              </h4>
              <p className="services__type-content">
                Unlock the full potential of mobile with Swift, Kotlin, and Java
                to create fast, secure, and platform-optimized applications.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <TrendUp size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Cross-Platform Development
              </h4>
              <p className="services__type-content">
                Expand your reach without compromising performance. Our React
                Native and Flutter solutions offer native-like speed and
                responsiveness on both iOS and Android.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Alarm size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">Immersive UI/UX Design</h4>
              <p className="services__type-content">
                We go beyond aesthetics! Using Figma, Adobe XD, and Sketch, we
                craft user-friendly interfaces that enhance engagement and boost
                conversions.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <AddressBook size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Flawless Testing & Deployment
              </h4>
              <p className="services__type-content">
                Your app, perfected! We run rigorous security, performance, and
                usability tests to ensure a smooth, bug-free launch.
              </p>
            </div>
            <div className="services__type-item">
              <span className="services__type-icon">
                <Globe size={28} color="#9eff00" weight="fill" />
              </span>
              <h4 className="services__type-name">
                Continuous Support & Upgrades
              </h4>
              <p className="services__type-content">
                Stay ahead of the curve with our proactive maintenance, feature
                enhancements, and security updates, keeping your app optimized
                for the future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PageHero
        heading={subHeroContent.heading}
        description={subHeroContent.description}
        isSubHero={true}
        page="services"
      />
    </div>
  );
}

export default Services;

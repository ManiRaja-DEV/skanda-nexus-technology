import "./page-hero.css";

interface IPageHero {
  heading: string;
  description: string;
  isSubHero?: boolean;
}

function PageHero({ heading, description, isSubHero }: IPageHero) {
  return (
    <section className="page-hero">
      <h1 className="page-hero__heading">{heading}</h1>
      <p className="page-hero__description">{description}</p>
      {isSubHero && <a href="#contact-form" className="page-hero__button">Start Project</a>}
    </section>
  );
}

export default PageHero;

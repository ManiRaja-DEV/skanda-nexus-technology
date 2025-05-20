import "./page-hero.css";

interface IPageHero {
  heading: string;
  description: string;
  isSubHero?: boolean;
  page?: string;
}

function PageHero({ heading, description, isSubHero, page }: IPageHero) {
  return (
    <section className="page-hero">
      <h1 className="page-hero__heading">{heading}</h1>
      <p className="page-hero__description">{description}</p>
      {isSubHero && (
        <a
          href={
            page && page !== "home"
              ? "/contact-us#contact-form"
              : "#contact-form"
          }
          className="page-hero__button"
        >
          Start Project
        </a>
      )}
    </section>
  );
}

export default PageHero;

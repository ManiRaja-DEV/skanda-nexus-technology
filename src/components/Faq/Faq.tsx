import { Plus, X } from "@phosphor-icons/react";

import "./faq.css";

function Faq() {
  const toggleFaq = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const faqItems = document.querySelectorAll(".faq__item");
    const clickedFaqItem = (event.target as SVGSVGElement).closest(
      ".faq__item"
    );

    if (clickedFaqItem) {
      faqItems.forEach((faqItem) => {
        if (faqItem !== clickedFaqItem) {
          faqItem.classList.remove("faq__item--active");
        }
      });

      clickedFaqItem.classList.toggle("faq__item--active");
    }
  };

  return (
    <div className="faq">
      <div className="faq__item">
        <div className="faq__header">
          <span className="faq__count">01</span>
          <p className="faq__question">
            What services does Skanda Nexus provide?
          </p>
          <Plus
            size={24}
            className="faq__icon faq__icon--open"
            onClick={(event) => toggleFaq(event)}
          />
          <X
            size={24}
            color="#c5ff66"
            className="faq__icon faq__icon--close"
            onClick={(event) => toggleFaq(event)}
          />
        </div>
        <p className="faq__answer">
          We offer end-to-end solutions in Human Resources, Information
          Technology, GPS tracking systems, and Training &amp; Development, all
          tailored to enhance your business performance.
        </p>
      </div>
      <div className="faq__item">
        <div className="faq__header">
          <span className="faq__count">02</span>
          <p className="faq__question">
            Do you offer corporate training for businesses?
          </p>
          <Plus
            size={24}
            className="faq__icon faq__icon--open"
            onClick={(event) => toggleFaq(event)}
          />
          <X
            size={24}
            color="#c5ff66"
            className="faq__icon faq__icon--close"
            onClick={(event) => toggleFaq(event)}
          />
        </div>
        <p className="faq__answer">
          Yes, we specialize in corporate training programs designed to improve
          employee skills, productivity, and align with your company’s strategic
          goals.
        </p>
      </div>
      <div className="faq__item">
        <div className="faq__header">
          <span className="faq__count">03</span>
          <p className="faq__question">
            What types of certification courses do you offer?
          </p>
          <Plus
            size={24}
            className="faq__icon faq__icon--open"
            onClick={(event) => toggleFaq(event)}
          />
          <X
            size={24}
            color="#c5ff66"
            className="faq__icon faq__icon--close"
            onClick={(event) => toggleFaq(event)}
          />
        </div>
        <p className="faq__answer">
          We provide industry-recognized certification courses in HR management,
          IT tools &amp; technologies, soft skills, communication, and
          leadership development.
        </p>
      </div>
      <div className="faq__item">
        <div className="faq__header">
          <span className="faq__count">04</span>
          <p className="faq__question">
            How long does it take to complete a training program?
          </p>
          <Plus
            size={24}
            className="faq__icon faq__icon--open"
            onClick={(event) => toggleFaq(event)}
          />
          <X
            size={24}
            color="#c5ff66"
            className="faq__icon faq__icon--close"
            onClick={(event) => toggleFaq(event)}
          />
        </div>
        <p className="faq__answer">
          The duration varies based on the course—some are short-term (2–5
          days), while others may extend up to 4 weeks depending on depth and
          complexity.
        </p>
      </div>
      <div className="faq__item">
        <div className="faq__header">
          <span className="faq__count">05</span>
          <p className="faq__question">
            Can training be customized to our business needs?
          </p>
          <Plus
            size={24}
            className="faq__icon faq__icon--open"
            onClick={(event) => toggleFaq(event)}
          />
          <X
            size={24}
            color="#c5ff66"
            className="faq__icon faq__icon--close"
            onClick={(event) => toggleFaq(event)}
          />
        </div>
        <p className="faq__answer">
          Absolutely. We design training modules based on your specific
          industry, team size, goals, and skill gaps to ensure maximum impact.
        </p>
      </div>
    </div>
  );
}

export default Faq;

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
          We offer IT, HR, GPS tracking, and Training & Development solutions.
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
          Yes, we provide customized training programs for leadership, technical
          skills, and employee well-being.
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
          We provide industry-recognized certifications in IT, HR, business
          management, and more.
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
          Training duration varies based on the program, from short workshops to
          extensive certification courses.
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
          Yes! We offer tailored training programs to match your company's
          requirements.
        </p>
      </div>
    </div>
  );
}

export default Faq;

import { useRef, useState } from "react";

import { toast } from "react-toastify";

import { SERVICES } from "../../utils/constants";
import { OPENINGS } from "../../utils/constants";
import "./form.css";

interface IForm {
  isCareersForm?: boolean;
}

function Form({ isCareersForm }: IForm) {
  const formRef = useRef(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedCheckboxes((prev) => [...prev, id]);
    } else {
      setSelectedCheckboxes((prev) => prev.filter((item) => item !== id));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const sheetsUrl = {
      projectInquiry:
        "https://script.google.com/macros/s/AKfycbyHgcszymMGFWx0jcRAdZzD0BQwZjNzOg29ums6TjIJ6aucuJ-2sBWl5OsVDxqojACs/exec",
      candidateDetails:
        "https://script.google.com/macros/s/AKfycbw8fIWZxA6ZB9aa65dilH_AD61TE4IdCvK0Tzd1wRp-Y2OLl46rc9z0vATVt4HRakYH/exec",
    };
    const sheetUrl = isCareersForm
      ? sheetsUrl.candidateDetails
      : sheetsUrl.projectInquiry;

    if (selectedCheckboxes.length === 0) {
      setFormError("Please select at least one option.");
      return;
    }

    if (formRef.current !== null) {
      const form = formRef.current;
      const formData = new FormData(form);

      isCareersForm
        ? formData.append("job", selectedCheckboxes.join(", "))
        : formData.append("services", selectedCheckboxes.join(", "));
      isCareersForm && formData.append("isCareerFrom", "true");
      !isCareersForm && formData.delete("service");

      console.log(formData);

      try {
        const response = await fetch(sheetUrl, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          toast("Submission failed. Please try again", { className: "toast" });
        }

        const data = await response.json();
        console.log(data);

        if (data.result === "success") {
          toast("Submission successful");
        } else {
          toast("Submission failed. Please try again.");
        }
      } catch (error) {
        toast("Submission failed. Please try again.");
      }
    }
  };

  const checkboxArr = isCareersForm ? OPENINGS : SERVICES;

  return (
    <form className="form" onSubmit={handleSubmit} method="post" ref={formRef}>
      <div className="form__control-wrapper">
        <div className="form__control">
          <label htmlFor="name" className="form__label">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form__input"
            placeholder="Type here"
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form__input"
            placeholder="Type here"
            required
          />
        </div>
      </div>
      {isCareersForm && (
        <div className="form__control-wrapper">
          <div className="form__control">
            <label htmlFor="experience" className="form__label">
              Experience In Years
            </label>
            <input
              id="experience"
              name="experience"
              defaultValue={0}
              type="number"
              className="form__input"
              placeholder="Type here (optional)"
              min={0}
            />
          </div>
          <div className="form__control">
            <label htmlFor="contact" className="form__label">
              Contact
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              className="form__input"
              placeholder="Type here"
              // value={"+91 "}
              minLength={10}
              required
            />
          </div>
        </div>
      )}
      <div className="form__control form__control--checkbox">
        <label className="form__label form__label--checkbox">
          {isCareersForm
            ? "Which role you are applying for?"
            : "What services are you interested in?"}
        </label>
        <div className="form__checkbox-wrapper">
          {checkboxArr.map((item) => (
            <div className="form__checkbox-item" key={item}>
              <input
                name="service"
                type="checkbox"
                id={item}
                className="form__checkbox-input"
                onChange={handleCheckboxChange}
                value={item}
              />
              <label htmlFor={item} className="form__checkbox-value">
                {item}
              </label>
            </div>
          ))}
        </div>
        {formError && <p className="form__error">{formError}</p>}
      </div>
      {isCareersForm ? (
        <div className="form__control form__control--file">
          <p className="form__label form__label--file">Upload Your Resume</p>
          <label htmlFor="resume" className="form__label-custom">
            <input
              name="resume"
              id="resume"
              type="file"
              className="form__input form__input--file"
              required
            />
            <span className="form__resume-btn">Browse</span>
          </label>
        </div>
      ) : (
        <div className="form__control">
          <label htmlFor="message" className="form__label">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form__textarea"
            placeholder="Type here"
          ></textarea>
        </div>
      )}
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default Form;

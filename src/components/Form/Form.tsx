import { useState } from "react";
import { SERVICES } from "../../utils/constants";
import { OPENINGS } from "../../utils/constants";
import "./form.css";

interface IForm {
  isCareersForm?: boolean;
}

function Form({ isCareersForm }: IForm) {
  const checkboxArr = isCareersForm ? OPENINGS : SERVICES;
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
  
    const form = event.target as HTMLFormElement;
  
    if (selectedCheckboxes.length === 0) {
      setFormError("Please select at least one option.");
      return;
    }

    form.reset();
    setFormError("");
  };
  

  return (
    <form className="form" onSubmit={handleSubmit} method="post">
      <div className="form__control-wrapper">
        <div className="form__control">
          <label htmlFor="" className="form__label">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            className="form__input"
            placeholder="Type here"
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="" className="form__label">
            Email
          </label>
          <input
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
            <label htmlFor="" className="form__label">
              Experience In Years
            </label>
            <input
              name="experience"
              defaultValue={0}
              type="number"
              className="form__input"
              placeholder="Type here (optional)"
              min={0}
            />
          </div>
          <div className="form__control">
            <label htmlFor="" className="form__label">
              Contact
            </label>
            <input
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
        <div className="form__control">
          <p className="form__label form__label--file">Upload Your Resume</p>
          <label htmlFor="resume" className="form__label form__label--file">
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
          <label htmlFor="" className="form__label">
            Your Message
          </label>
          <textarea
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

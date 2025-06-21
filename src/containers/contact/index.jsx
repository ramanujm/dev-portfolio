import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Get in Touch</h3>
        <div className="contact__content__form">
          <div className="contact__content__form__controlswrapper">
            <div>
              <input required name="name" className="inputName" type={"text"} />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div>
              <input
                required
                name="email"
                className="inputEmail"
                type={"text"}
              />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div>
              <textarea
                required
                name="description"
                className="inputDescription"
                type={"text"}
                rows="10"
              />
              <label htmlFor="description" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

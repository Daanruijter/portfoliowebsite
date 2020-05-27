import React, { Component } from "react";
import "../CSS/Contact.css";
import telephone from "../pictures/telephone.jpg";
import email from "../pictures/email.png";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-introduction"></div>
        <div className="contact" id="contact-id">
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              Contact me using the form below
            </div>
            <div className="contact-form">
              <form>
                Name:
                <label htmlFor="name">
                  <input type="text" id="name" placeholder="name"></input>
                </label>
                <br />
                Phone number:
                <label htmlFor="phone">
                  <input type="text" id="hone" placeholder="phone"></input>
                </label>
                <br />
                Company:
                <label htmlFor="company">
                  <input
                    type="company"
                    id="company"
                    placeholder="company"
                  ></input>
                </label>
                <br />
                Message:
                <label htmlFor="message">
                  <textarea
                    type="message"
                    id="message"
                    placeholder="message"
                  ></textarea>
                </label>
                <br />
                <input
                  className="contact-submit-button"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
          <div className="contact-direct-wrapper">
            <div className="contact-direct-header">Contact me directly</div>
            <div className="contact-direct">
              <div className="contact-direct-phone">
                <div className="contact-direct-phone-width">
                  <img alt="telephone" src={telephone} />
                </div>

                <div className="contact-direct-phone-text">0615178860</div>
              </div>
              <div className="contact-direct-email">
                <div className="contact-direct-email-width">
                  <img alt="email" src={email} />
                </div>
                <div className="contact-direct-email-text">
                  {" "}
                  daan_ruijter@hotmail.com
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="contact-background-below"></div>
      </div>
    );
  }
}

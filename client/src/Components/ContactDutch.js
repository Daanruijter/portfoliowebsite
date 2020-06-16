import React, { Component } from "react";
import "../CSS/Contact.css";
import telephone from "../pictures/telephone.jpg";
import email from "../pictures/email.png";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      country: "",
      company: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      country: this.state.country,
      company: this.state.company,
      message: this.state.message,
    };
    let url = "";
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:5000/contactdata";
    }
    if (process.env.NODE_ENV === "production") {
      url = "https://daanruijter.herokuapp.com/contactdata";
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    this.setState({
      name: "",
      phoneNumber: "",
      email: "",
      country: "",
      company: "",
      message: "",
    });
  }
  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-introduction"></div>
        <div className="contact" id="contact-id">
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              Neem contact op via het onderstaande formulier
            </div>
            <div className="contact-form">
              <form onSubmit={this.handleSubmit}>
                Naam:
                <label htmlFor="name">
                  <input
                    required
                    pattern="[A-Za-z]{1,40}"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                    id="name"
                    placeholder="naam"
                  ></input>
                </label>
                <br />
                Telefoonnummer:
                <label htmlFor="phone">
                  <input
                    required
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={(e) => this.handleChange(e)}
                    type="tel"
                    pattern="[0-9]{10,}"
                    id="hone"
                    placeholder="telefoonnummer zonder spaties"
                  ></input>
                </label>
                <br /> E-mail:
                <label htmlFor="phone">
                  <input
                    required
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                    id="email"
                    placeholder="e-mail"
                  ></input>
                </label>
                <br />
                Land:
                <label htmlFor="country">
                  <input
                    required
                    name="country"
                    value={this.state.country}
                    onChange={(e) => this.handleChange(e)}
                    type="country"
                    id="country"
                    placeholder="land"
                  ></input>
                </label>
                <br />
                Organisatie:
                <label htmlFor="company">
                  <input
                    required
                    name="company"
                    value={this.state.company}
                    onChange={(e) => this.handleChange(e)}
                    type="company"
                    id="company"
                    placeholder="organisatie"
                  ></input>
                </label>
                <br />
                Bericht:
                <label htmlFor="message">
                  <textarea
                    required
                    name="message"
                    value={this.state.message}
                    onChange={(e) => this.handleChange(e)}
                    type="message"
                    id="message"
                    placeholder="bericht"
                  ></textarea>
                </label>
                <br />
                <input
                  className="contact-submit-button"
                  type="submit"
                  value="Verzenden"
                />
              </form>
            </div>
          </div>
          <div className="contact-direct-wrapper">
            <div className="contact-direct-header">
              Neem op directe wijze contact op
            </div>
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

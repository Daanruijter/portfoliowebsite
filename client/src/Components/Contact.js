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
    // alert("A name was submitted: " + this.state.name);
    event.preventDefault();
    let formData = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      country: this.state.country,
      company: this.state.company,
      message: this.state.message,
    };

    fetch("http://localhost:5000/contactdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      // .then((data) => {
      //   const favourites = data;
      //   console.log(favourites);
      // })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    console.log(formData);
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
              Contact me using the form below
            </div>
            <div className="contact-form">
              <form onSubmit={this.handleSubmit}>
                Name:
                <label htmlFor="name">
                  <input
                    required
                    pattern="[A-Za-z]{1,40}"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                    id="name"
                    placeholder="name"
                  ></input>
                </label>
                <br />
                Phone number:
                <label htmlFor="phone">
                  <input
                    required
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={(e) => this.handleChange(e)}
                    type="tel"
                    pattern="[0-9]{10,}"
                    id="hone"
                    placeholder="phone number without spaces"
                  ></input>
                </label>
                <br /> Email:
                <label htmlFor="phone">
                  <input
                    required
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                    id="email"
                    placeholder="email"
                  ></input>
                </label>
                <br />
                Country:
                <label htmlFor="country">
                  <input
                    required
                    name="country"
                    value={this.state.country}
                    onChange={(e) => this.handleChange(e)}
                    type="country"
                    id="country"
                    placeholder="country"
                  ></input>
                </label>
                <br />
                Company:
                <label htmlFor="company">
                  <input
                    required
                    name="company"
                    value={this.state.company}
                    onChange={(e) => this.handleChange(e)}
                    type="company"
                    id="company"
                    placeholder="company"
                  ></input>
                </label>
                <br />
                Message:
                <label htmlFor="message">
                  <textarea
                    required
                    name="message"
                    value={this.state.message}
                    onChange={(e) => this.handleChange(e)}
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

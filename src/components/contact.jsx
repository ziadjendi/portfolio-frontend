import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Contact</span>
              <h2 className="mb-4">Contact Me</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>

          <div className="row no-gutters block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-light p-4 p-md-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6 d-flex">
              <div
                className="img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

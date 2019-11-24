import React, { Component } from 'react';
class About extends Component {
    state = {  }
    render() { 
        return ( <section className="ftco-about ftco-counter img ftco-section" id="about-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay"></div>
                <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage:"url(images/about-1.jpg)"}}>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 pl-lg-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <span className="subheading">Welcome</span>
                  <h2 className="mb-4" style={{fontSize: "34px", textTransform: "capitalize"}}>About Me</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="media block-6 services d-block ftco-animate">
                    <div className="icon"><span className="flaticon-analysis"></span></div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Web Design</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div> 
                </div>
                <div className="col-md-6">
                  <div className="media block-6 services d-block ftco-animate">
                    <div className="icon"><span className="flaticon-analysis"></span></div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Web Application</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div> 
                </div>
              </div>
              <div className="counter-wrap ftco-animate d-flex mt-md-3">
                <div className="text p-4 pr-5 bg-primary">
                  <p className="mb-0">
                    <span className="number" data-number="200">0</span>
                    <span>Finished Projects</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       );
    }
}
 
export default About;
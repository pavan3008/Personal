import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0 names">{this.landingData.firstName} &nbsp;
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <br></br>
          <div >{this.landingData.phoneNumber}
            <a href="mailto:name@email.com">{this.landingData.email}</a>
          </div>
          <br></br>
          <div className="social-icons">
            <a href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <br></br>
          <p className="msg-wrapper">{this.landingData.bio}</p>
        </div>
      </section>
    );
  }
}

export default Landing;

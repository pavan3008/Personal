import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode } from "@fortawesome/free-solid-svg-icons";

class Interests extends Component {
  constructor(props) {
    super(props);

    this.interests = props.interests;
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
        <h2 className="mb-5">Volunteer Experience</h2>
          {
            this.interests.map((exp, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{exp.paragraph}</h3>
                  <div className="subheading mb-3">{exp.org}</div>
                  <p className="msg-wrapper">{exp.duty}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{exp.from} - {exp.to}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Interests;

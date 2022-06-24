import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons";

class Interests extends Component {
  constructor(props) {
    super(props);

    this.interests = props.interests;
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <ul className="fa-ul mb-2">
          {
            this.interests.map((data, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCode} color="#ffc107" />
                <span className="ml-2"> {data.paragraph} </span>
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Interests;

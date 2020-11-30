import React, { Component } from 'react';

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
          <p className="mb-0">{this.interests.paragraphOne}</p>
          <p className="mb-0">{this.interests.paragraphTwo}</p>
          <p className="mb-0">{this.interests.paragraphThree}</p>
          <p className="mb-0">{this.interests.paragraphThree}</p>
          <p className="mb-0">{this.interests.paragraphFour}</p>
          <p className="mb-0">{this.interests.paragraphFive}</p>
        </div>
      </section>
    );
  }
}

export default Interests;

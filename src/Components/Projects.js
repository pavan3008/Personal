import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          {
            this.projects.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0"><a href={data.links}>{data.name}</a></h3>
                  <p className='msg-wrapper'>{data.details}</p>
                </div>
                {/* <div className="resume-date text-md-right">
                  <span className="text-primary">{data.fromDate} - {data.toDate}</span>
                </div> */}
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Projects;

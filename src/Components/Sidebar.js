import React, { Component } from 'react';
import image from '../Assets/four.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.sidebarData = props.sidebarData;
        this.state = {
            isMenuOpen: false, // State to track if the menu is open or closed
        };
    }

    handleMenuClick = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-dark bg-primary fixed-top ${this.state.isMenuOpen ? 'active' : ''}`} id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>
                    </span>
                </a>
                <button className={`navbar-toggler ${this.state.isMenuOpen ? 'collapsed' : ''}`} type="button" onClick={this.handleMenuClick} aria-expanded={this.state.isMenuOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${this.state.isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav">                        
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about" onClick={this.handleMenuClick}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#experience" onClick={this.handleMenuClick}>Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#education" onClick={this.handleMenuClick}>Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#projects" onClick={this.handleMenuClick}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#skills" onClick={this.handleMenuClick}>Technical Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#interests" onClick={this.handleMenuClick}>Interests</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#awards" onClick={this.handleMenuClick}>Certifications</a>
                        </li>   
                        <br></br>
                        <li>
                            <div className="social-icons">
                                <a href={this.sidebarData.linkedin}>
                                <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href={this.sidebarData.github} >
                                <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </li>  
                        <br></br>                   
                    </ul>
                </div>
                {/* Rest of the component code */}
                
            </nav>
        );
    }
}

export default Sidebar;
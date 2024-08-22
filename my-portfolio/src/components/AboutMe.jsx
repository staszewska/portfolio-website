import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "../img/IMG_9903.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faJs,
  faBootstrap,
  faNode,
  faFirefox,
  faSass,
  faGit,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h1>About Me</h1>
      <h2 className="about-me__title">
        ✈️ From Skies to Code Lines: My Journey
      </h2>

      <div className="about-me__image-container">
        <img src={myImage} alt="Gosia" className="about-me__image" />
      </div>

      <div className="about-me__details">
        <Container>
          <Row>
            <Col className="offset-sm-2 col-sm-8 offset-sm-2" sm={6}>
              <p>
                I'm Gosia, a former flight attendant with a passion for
                exploring not just the skies, but also the vast world of
                technology. While I once ensured passengers' comfort at 30,000
                feet, I now find my excitement in coding and creating in the
                digital realm.
              </p>
            </Col>
          </Row>
        </Container>

        <h4 className="about-me__hashtag">
          #FromFlightstoCode #WebDeveloperInMaking
        </h4>
      </div>

      <div className="github-container">
        <a
          href="https://github.com/staszewska"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my GitHub Profile
        </a>

        <a
          href="/path_to_your_cv.pdf"
          className="btn btn-primary"
          download="Gosia_CV.pdf"
        >
          Download My CV
        </a>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ul className="skills-list list-unstyled">
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faReact} /> React
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faAngular} /> Angular
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faBootstrap} /> React-Bootstrap
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faNode} /> NodeJS
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faJs} /> Express
            </span>
          </li>
          <li>
            <span className="btn btn-light">MongoDB</span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faNetworkWired} /> REST API
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faNode} /> Mongoose
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faFirefox} /> FireStoreDB
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faSass} /> SASS
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faGit} /> GIT
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faHtml5} /> HTML
            </span>
          </li>
          <li>
            <span className="btn btn-light">
              <FontAwesomeIcon icon={faCss3Alt} /> CSS
            </span>
          </li>
          <li>
            <span className="btn btn-light">jQuery</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;

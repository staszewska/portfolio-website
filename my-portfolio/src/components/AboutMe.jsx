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
  faSass,
  faGit,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import SocialMedia from "./Footer";

const AboutMe = () => {
  return (
    <>
      <Header />
      <section className="about-me">
        <Container>
          <h1 className="text-center">About Me</h1>
          <h2 className="about-me__title text-center">
            ✈️ From Skies to Code Lines: My Journey
          </h2>

          <Row className="justify-content-center my-4">
            <Col xs={12} md={4} className="text-center">
              <img src={myImage} alt="Gosia" className="about-me__image" />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }} xs={12}>
              <p className="about-me__details text-center">
                I'm Gosia, a former flight attendant with a passion for
                exploring not just the skies, but also the vast world of
                technology. While I once ensured passengers' comfort at 30,000
                feet, I now find my excitement in coding and creating in the
                digital realm.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center my-4">
            <Col xs={12} md={10} lg={8}>
              <ul className="about-me__points">
                <li>
                  <strong>Background</strong>: After 5 years in the aviation
                  industry, I pivoted to web development, gaining proficiency in
                  HTML, CSS, JavaScript, React, and Node.js through intensive
                  training and hands-on projects.
                </li>
                <li>
                  <strong>Skills</strong>: My transition has honed my
                  problem-solving, creative thinking, and agile project
                  management skills—essential for developing robust full-stack
                  applications.
                </li>
                <li>
                  <strong>Focus</strong>: I specialize in full-stack
                  development, creating seamless and dynamic web experiences
                  from front-end to back-end.
                </li>
                <li>
                  <strong>Goals</strong>: I'm eager to contribute to innovative
                  projects and teams, leveraging my diverse background to drive
                  creativity and deliver impactful solutions.
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <h4 className="about-me__hashtag">
                #FromFlightstoCode #WebDeveloperInMaking
              </h4>
            </Col>
          </Row>

          <Row className="justify-content-center my-4">
            <Col xs={12} md={6} className="text-center">
              <div className="github-container">
                <a
                  href="https://github.com/staszewska"
                  className="btn btn-primary m-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See my GitHub Profile
                </a>

                <a
                  href="/path_to_your_cv.pdf"
                  className="btn btn-secondary m-2"
                  download="Gosia_CV.pdf"
                >
                  Download My CV
                </a>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <div className="skills text-center">
                <h1>Skills</h1>
                <ul className="skills-list list-unstyled d-flex flex-wrap justify-content-center">
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faReact} /> React
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faAngular} /> Angular
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faJs} /> JavaScript
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faBootstrap} /> React-Bootstrap
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faNode} /> NodeJS
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">MongoDB</span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faNetworkWired} /> REST API
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faSass} /> SASS
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faGit} /> Git
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faHtml5} /> HTML
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">
                      <FontAwesomeIcon icon={faCss3Alt} /> CSS
                    </span>
                  </li>
                  <li>
                    <span className="btn btn-light m-2">jQuery</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutMe;

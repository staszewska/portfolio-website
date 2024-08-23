import React from "react";
import linkedinIcon from "../img/linkedin_icon.svg";
import githubIcon from "../img/github_icon.svg";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <>
      <footer className="page-footer">
        <Container>
          <Row>
            <Col md={{ span: 2, offset: 5 }} xs={12}>
              <h2>Find me on:</h2>
              <div className="social-media">
                <a
                  href="https://github.com/staszewska"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="github-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/małgorzata-staszewska-bui-9ab346281"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="linkedin-icon" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Header;

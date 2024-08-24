import React from "react";
import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";
import portfolioPicture from "../img/portfolio-picture.jpeg";

import { Container, Row, Col } from "react-bootstrap";

function MainPage() {
  return (
    <>
      <Header />
      <Container>
        <Row className="main-page">
          <Col s={12} lg={{ span: 3, offset: 3 }} className="text-center">
            <div className="profile">
              <img
                src={portfolioPicture}
                className="profile__portrait"
                alt="Lisa Gringl Portrait"
              />
            </div>
          </Col>

          <Col lg={3}>
            <div className="profile-text text-center">
              <h1>Hello World!</h1>
              <p>
                My name is Gosia, and I'm based in Germany. Currently I am
                learning to become a <i>web</i> developer.
              </p>
              <a href="work.html">Check out some of my code</a>
            </div>
          </Col>
        </Row>
      </Container>

      <SocialMedia />
    </>
  );
}

export default MainPage;

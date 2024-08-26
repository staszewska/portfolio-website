import React from "react";
import portfolioPicture from "../img/portfolio-picture.jpeg";
import { Container, Row, Col } from "react-bootstrap";

function MainPage() {
  return (
    <>
      <Container>
        <Row className="main-page">
          <Col
            md={{ span: 6, offset: 0 }}
            lg={{ span: 5, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            className="text-center"
          >
            {/* <div className="profile"> */}
            <img
              src={portfolioPicture}
              className="profile__portrait"
              alt="Lisa Gringl Portrait"
            />
            {/* </div> */}
          </Col>

          <Col md={6} lg={5} xl={4}>
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
    </>
  );
}

export default MainPage;

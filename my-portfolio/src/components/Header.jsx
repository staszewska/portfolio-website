import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa"; // hamburger icon

function Header() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        {/* hamburger menu toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="basic-navbar">
          <Nav className="mr-auto">
            <Nav.Link className="navbar-link" href="index.html">
              home
            </Nav.Link>
            <Nav.Link className="navbar-link" href="about.html">
              about me
            </Nav.Link>
            <Nav.Link className="navbar-link" href="work.html">
              my projects
            </Nav.Link>
            <Nav.Link className="navbar-link" href="contact.html">
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;

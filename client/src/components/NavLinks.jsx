import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Auth from '../utils/auth';

import("../utils/style.css")

function NavLinks({ expand }) {
    return (
      <>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Site Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="Skaters"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="/AboutSkater">
                  How to Become a Skater
                </NavDropdown.Item>
                <NavDropdown.Item href="/CreateSkater">
                  Become a Skater
                </NavDropdown.Item>
                <NavDropdown.Item href="/SkaterList">
                  See All Skaters
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Sponsors"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="/AboutSponsor">
                  How to Become a Sponsor
                </NavDropdown.Item>
                <NavDropdown.Item href="/SponsorList">
                  See All Sponsors
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Levels"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="/SponsorLevels">
                  Levels Description
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Connect">Connect</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </>
    );
  }
  
  export default NavLinks;
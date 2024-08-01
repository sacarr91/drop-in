import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Auth from '../utils/auth';
import NavLinks from './NavLinks';
import LoginLogic from './HeaderLogin';

// import("../utils/style.css")

function Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary bg-img mb-3">
          <Container fluid>
            <Navbar.Brand href="/" className="bangers homeLink">DROP IN</Navbar.Brand>
            <LoginLogic />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="toggleBtn" />
            <NavLinks />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;



{/* <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Site Navigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Skaters" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item href="/AboutSkater">
                      How to Become a Skater
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/CreateSkater">
                      Become a Skater
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      See All Sponsors
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Sponsors" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item href="/AboutSponsor">
                      How to Become a Sponsor
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      See All Sponsors
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Levels" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item href="/SponsorLevels">
                      Levels Description
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/Connect">
                    Connect
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas> */}


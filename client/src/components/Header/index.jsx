import { Link } from 'react-router-dom';
// import NavTabs from '../NavTabs';

import Auth from '../../utils/auth';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="titan-header">
      <section className="header-content">
        <section className="">
          {/* Add Steph's Headder below here */}
          <>
            {[false].map((expand) => (
              <Navbar key={expand} expand={expand} className="bg-body-tertiary bg-img mb-3">
                <Container fluid>
                  <Navbar.Brand href="/" className="bangers homeLink">DROP IN</Navbar.Brand>
                  <section className="button-link-sec">
                    {Auth.loggedIn() ? (
                      <>
                        <Link className="button-link secondary" to="/me">
                          View My Profile
                        </Link>
                        <button className="button-link alert" onClick={logout}>
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link className="button-link primary" to="/login">
                          Login
                        </Link>
                        <Link className="button-link secondary" to="/signup">
                          Signup
                        </Link>
                      </>
                    )}
                  </section>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="toggleBtn" />
                  <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >
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
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </>
        </section>
      </section>
    </header>
  );
};

export default Header;

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavLinks({ expand }) {
  return (
    <>
      <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end"      >
{/* SIDEBAR HEADER */}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Site Navigation
          </Offcanvas.Title>
        </Offcanvas.Header>
{/* SIDEBAR BODY */}
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
    {/* HOME LINK */}
            <Nav.Link href="/">
              Home
            </Nav.Link>
    {/* SKATER DROPDOWN */}
            <NavDropdown title="Skaters" id={`offcanvasNavbarDropdown-expand-${expand}`}>
              <NavDropdown.Item href="/all-skaters">
                See All Skaters
              </NavDropdown.Item>
              <NavDropdown.Item href="/new-skater">
                Become a Skater
              </NavDropdown.Item>
            </NavDropdown>
    {/* SPONSOR DROPDOWN */}
            <NavDropdown title="Sponsors" id={`offcanvasNavbarDropdown-expand-${expand}`}>
              <NavDropdown.Item href="/all-sponsors">
                See All Sponsors
              </NavDropdown.Item>
            </NavDropdown>
    {/* INFO DROPDOWN */}
            <NavDropdown title="Levels" id={`offcanvasNavbarDropdown-expand-${expand}`}>
              <NavDropdown.Item href="/sponsor-levels">
                How to Become a Skater
              </NavDropdown.Item>
              <NavDropdown.Item href="/sponsor-levels">
                How to Become a Sponsor
              </NavDropdown.Item>
              <NavDropdown.Item href="/sponsor-levels">
                About Sponsorship Levels
              </NavDropdown.Item>
            </NavDropdown>
    {/* CONNECT LINK */}
            <Nav.Link href="/connect">
              Connect
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
}

export default NavLinks;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


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
                <NavDropdown.Item href="/get-sponsored">
                  How to Get Sponsored
                </NavDropdown.Item>
                <NavDropdown.Item href="/new-skater">
                  Become a Skater
                </NavDropdown.Item>
                <NavDropdown.Item href="/all-skaters">
                  See All Skaters
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Sponsors"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="/sponsor-levels">
                  Sponsorship Levels
                </NavDropdown.Item>
                <NavDropdown.Item href="/new-sponsor">
                  Become a Sponsor
                </NavDropdown.Item>
                <NavDropdown.Item href="/all-sponsors">
                  See All Sponsors
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/connect">Connect</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </>
    );
  }
  
  export default NavLinks;
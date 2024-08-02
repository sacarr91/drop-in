import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from './NavLinks';
import LoginLogic from './HeaderLogin';
import '../App.css';

function Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary bg-img mb-3">
          <Container fluid>
            <Navbar.Brand href="/" className="bangers homeLink">DROP IN</Navbar.Brand>
            <div style={{justifySelf: "end"}}>
              <LoginLogic />
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <NavLinks />
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;

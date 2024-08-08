import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import skateboardgif from '../../../public/images/skateboardgif.gif'

function Footer() {
  return (
    <Navbar position="absolute" expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center">
          <Nav.Item className="me-4">
            <Nav.Link href="/home">
              <img src={skateboardgif} height={80} alt="Skateboard" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="me-4">
            <Nav.Link href="/our-team" target="_blank">
              <h1>Our Team</h1>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://stackoverflow.com/users/23317680/stephcarr" target="_blank">
              <h1>Our Mission</h1>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <span>est. 2024</span>
      </Container>
    </Navbar>
  );
}

export default Footer;
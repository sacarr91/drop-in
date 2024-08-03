import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Navbar fixed="bottom" expand="lg" className="footer-style">
      <Container>
        <Nav variant="underline" style={{ flexDirection: "row" }}>
          <Nav.Item>
            <Nav.Link href="https://github.com/sacarr91" target="_blank"><img src='/images/coderepo.png' height={30}></img></Nav.Link>
          </Nav.Item>
          <Nav.Item className="me-4">
            <Nav.Link href="https://www.linkedin.com/in/stephaniecarr424/" target="_blank">
              <h4>Our Team</h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://stackoverflow.com/users/23317680/stephcarr" target="_blank">
              <h4>Our Mission</h4>
            </Nav.Link>
          </Nav.Item>
        </Nav>
          <img src='/images/titanglow.png' height={30} style={{justifySelf: "end"}}></img>
      </Container>
    </Navbar>
  );
}

export default Footer;
// text or icon links to profiles on {GitHub, LinkedIn, StackOverflow}
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Navbar fixed="bottom" expand="lg" className="footer-style">
      <Container>
        <Nav variant="underline" style={{ flexDirection: "row" }}>
          <Nav.Item>
            <Nav.Link href="https://github.com/sacarr91" target="_blank"><img src='client/public/images/coderepo.png' height={30}></img></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/stephaniecarr424/" target="_blank"><img src='client/public/images/devteam.png' height={30}></img></Nav.Link>
          </Nav.Item>
        </Nav>
          <img src='client/public/images/titanglow.png' height={30} style={{justifySelf: "end"}}></img>
      </Container>
    </Navbar>
  );
}

export default Footer;
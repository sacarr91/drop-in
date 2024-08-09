import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
      <Navbar className="footer-style">
        <Container>
          <Nav variant="underline">
            <Nav.Item className='footLink'>
              <Nav.Link href="/our-team" target="_blank">
                <img src='/images/devteam.png' height={40}>
                </img>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='footLink'>
              <Nav.Link href="https://github.com/sacarr91/drop-in" target="_blank">
                <img src='/images/coderepo.png' height={40}>
                </img>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <img src='/images/titanGlowFooter.png' height={33} style={{ justifySelf: "end" }}></img>
        </Container>
      </Navbar>
  );
}

export default Footer;
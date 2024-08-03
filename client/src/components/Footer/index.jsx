import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Navbar fixed="bottom" expand="lg" className="footer-style">
      <Container>
        <Nav variant="underline">
        <Nav.Item className='footLink'>
            <Nav.Link href="https://github.com/sacarr91" target="_blank">
            <img src='/images/devteam.png' height={40}>
            </img>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='footLink'>
            <Nav.Link href="https://github.com/sacarr91" target="_blank">
            <img src='/images/coderepo.png' height={40}>
            </img>
            </Nav.Link>
          </Nav.Item>
          
          
        </Nav>
          <img src='/images/titanGlowFooter.png' height={30} style={{justifySelf: "end"}}></img>
      </Container>
    </Navbar>
  );
}

export default Footer;
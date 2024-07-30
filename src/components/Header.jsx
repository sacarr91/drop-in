import NavTabs from "./NavTabs";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header() {
    return <>
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
      <Link to="/"><img src='/images/giving.png' height={50}></img>
      </Link>
      <NavTabs />
      </Container>
    </Navbar>
    </>}

export default Header;
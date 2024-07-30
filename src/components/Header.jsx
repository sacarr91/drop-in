import Image from 'react-bootstrap/Image';
import NavTabs from "./NavTabs";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

import("../utils/header.css")

function Header() {
  return <>
     <Navbar className="bg-body-tertiary bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
            <NavTabs />
            </Navbar.Brand>
        </Container>
      </Navbar>
    </>
}

export default Header;


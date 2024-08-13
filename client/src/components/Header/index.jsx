import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from '../NavLinks';
import LoginForm from '../LoginForm';


function Header() {
  return (
    <div className='headerNav'>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className=" bg-img mb-3">
            <Navbar.Brand href="/" className="bangers homeLink">DROP IN</Navbar.Brand>
            <div className='buttonDiv'>
            <LoginForm />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="toggleBtn" />
            </div>
            <NavLinks />
        </Navbar>
      ))}
    </div>
  );
}

export default Header;

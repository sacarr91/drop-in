import { Link } from 'react-router-dom';
import NavTabs from '../NavTabs';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="titan-header">
      <section className="header-content">
        <Link className="text-dark" to="/">
          <h1 className="header-title">
            Titan Framework
          </h1>
        </Link>
        <p className="header-text-content">
          MERN stack app framework
        </p>
        <section className="button-link-sec">
          {Auth.loggedIn() ? (
            <>
              <Link className="button-link secondary" to="/me">
                View My Profile
              </Link>
              <button className="button-link alert" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="button-link primary" to="/login">
                Login
              </Link>
              <Link className="button-link secondary" to="/signup">
                Signup
              </Link>
            </>
          )}
        </section>
        <section className="">
        <NavTabs></NavTabs>
        </section>
      </section>
    </header>
  );
};

export default Header;

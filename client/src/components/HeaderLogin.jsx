import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function LoginLogic(){
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      }
    return(
        <>
        {Auth.loggedIn() ? (
          <>
            <Link to="/">
              View My Profile
            </Link>
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/">
              Login
            </Link>
            <Link to="/">
              Signup
            </Link>
          </>
        )}
      </>
    )
}

export default LoginLogic
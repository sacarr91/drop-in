import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function LoginForm(){
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      }
    return(
        <>
        {Auth.loggedIn() ? (
          <>
            <Link to="/me">
              View My Profile
            </Link>
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/Login">
              Login
            </Link>
            <Link to="/Signup">
              Signup
            </Link>
          </>
        )}
      </>
    )
}

export default LoginForm
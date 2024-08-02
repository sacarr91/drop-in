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
            <Link to="/" className='me-4 btn headerbtn'>
              View My Profile
            </Link>
            <button onClick={logout} className='me-4 btn headerbtn'>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/Login" className='me-4 btn headerbtn'>
              Login
            </Link>
            <Link to="/" className='me-4 btn headerbtn'>
              Signup
            </Link>
          </>
        )}
      </>
    )
}

export default LoginLogic
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
            <Link to="/me" className='btn headerbtn'>
              View My Profile
            </Link>
            <button onClick={logout} className='btn headerbtn'>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/Login" className='btn headerbtn'>
              Login
            </Link>
            <Link to="/Signup" className='btn headerbtn'>
              Signup
            </Link>
          </>
        )}
      </>
    )
}

export default LoginForm
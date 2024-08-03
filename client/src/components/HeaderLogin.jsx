import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function LoginLogic(){
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      }
    return(
        <>
                  <section className="button-link-sec">
                    {Auth.loggedIn() ? (
                      <>
                        <Link to="/me" className='button-link secondary me-4 btn headerbtn'>
                          View My Profile
                        </Link>
                        <button  onClick={logout} className='button-link alert me-4 btn headerbtn'>
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className='button-link primary me-4 btn headerbtn'>
                          Login
                        </Link>
                        <Link  to="/signup" className='button-link secondary me-4 btn headerbtn'>
                          Signup
                        </Link>
                      </>
                    )}
                  </section>
      </>
    )
}

export default LoginLogic
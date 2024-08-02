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
      </>
    )
}

export default LoginLogic
import { useRouteError } from "react-router-dom";
<<<<<<< HEAD
import Header from "../components/Header";
import Footer from "../components/Footer";
=======
import Container from 'react-bootstrap/esm/Container';
>>>>>>> 6adeb933788dded8135fc9e8b918a97308c3cb0f

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
<<<<<<< HEAD
    <>
      <Header />
      <center><div id="error-page">
=======
    <Container className="py-5" id="error-page">
      <center>
>>>>>>> 6adeb933788dded8135fc9e8b918a97308c3cb0f
        <h1>🙊 Hmmm... 🙈</h1>
        <p>😯 It seems something went wrong, please refresh the page and try again</p>
        <p>
          <i>{error.statusText || error.message}</i>
<<<<<<< HEAD
        </p>
      </div></center>
      <Footer />
    </>
=======
          
        </p>
        <img src='https://gifbin.com/bin/112013/1384107943_skater_group_wipeout.gif' alt="welcome" className='gif'></img>
      </center>
    </Container>
>>>>>>> 6adeb933788dded8135fc9e8b918a97308c3cb0f
  )
}
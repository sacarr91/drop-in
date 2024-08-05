import { useRouteError } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container className="py-5" id="error-page">
      <center>
        <h1>🙊 Hmmm... 🙈</h1>
        <p>😯 It seems something went wrong, please refresh the page and try again</p>
        <p>
          <i>{error.statusText || error.message}</i>
          
        </p>
        <img src='https://gifbin.com/bin/112013/1384107943_skater_group_wipeout.gif' alt="welcome" className='gif'></img>
      </center>
    </Container>
  )
}
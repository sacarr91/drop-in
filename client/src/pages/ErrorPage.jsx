import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
        <h1>🙊 Hmmm... 🙈</h1>
        <p>😯 It seems something went wrong, please refresh the page and try again</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    )
}
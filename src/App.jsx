import { Outlet } from "react-router-dom";
import Footer from "../client/src/components/Footer";
import Header from "../client/src/components/Header";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./utils/style.css";

function App() {
  return (
    <>
      <StrictMode>
        <div className="bg-style">
          <Header />
          <main className="mx-3 p-3">
            <Outlet />
          </main>
          <Footer />
        </div>
      </StrictMode>
    </>
  );
}

export default App;

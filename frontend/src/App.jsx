import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Route from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <React.Fragment>
        <Helmet>
          <title>Vizada Academy</title>
          <meta
            name="description"
            content="Welcome to Vizada Academy - Your go-to platform for quality education in IT and Management."
          />
          <meta
            name="keywords"
            content="Vizada Academy, IT courses, Management courses, online education"
          />
          <meta property="og:title" content="Vizada Academy" />
          <meta
            property="og:description"
            content="Discover a wide range of courses in IT and Management with Vizada Academy."
          />
          <meta property="og:url" content="https://www.vizada.dz" />
        </Helmet>

        <Route />
        <ToastContainer />
      </React.Fragment>
    </>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Courses from "./components/Courses";
import Services from "./components/Services";
import QnA from "./components/QnA";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import { FooterWithLogo } from "./components/Footer";
const Home = () => {
  return (
    <div className="home bg-gray-50 ">
      {/**navbar: logo login button  + hyperlinks(courses, Pricing, Q/A,  ) */}
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <Intro />
      <div className="teko-400 w-[100%] bg-gray-50  my-5 flex items-center justify-center flex-col gap-5">
        <h1 className="text-2xl">Nos Partenaires</h1>
        <div className="w-full  p-4">\ </div>
      </div>
      <Services />
      <Courses />
      <Pricing />

      <QnA />
      <Contact />
      <FooterWithLogo />
    </div>
  );
};

export default Home;

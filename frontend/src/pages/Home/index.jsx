import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Courses from "./components/Courses";
import Services from "./components/Services";
import QnA from "./components/QnA";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import { FooterWithLogo } from "./components/Footer";
import Intro2 from "./components/Intro2";
const Home = () => {
  return (
    <div className="home  bg-gradient-to-tr from-[#fffdf7] to-[#fffaf2] ">
      {/**navbar: logo login button  + hyperlinks(courses, Pricing, Q/A,  ) */}
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <Intro />
      <Intro2 />
      <section className="teko-400 w-[100%]   my-5  flex items-center justify-center flex-col gap-5 partners">
        <h1 className="text-2xl">Nos Partenaires</h1>
        <div className="partners-img-container">
          <div className="partners-img"></div>
        </div>
      </section>
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

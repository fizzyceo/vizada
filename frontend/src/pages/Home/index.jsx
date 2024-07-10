import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Courses from "./components/Courses";
import Services from "./components/Services";
import QnA from "./components/QnA";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import { FooterWithLogo } from "./components/Footer";
import Intro2 from "./components/Intro2";
import toutApprendre from "../../assets/toutapprendre.svg";
import alphrom from "../../assets/alphorm.svg";
import tex from "../../assets/tex.png";
import { useCoursesStore } from "../../stores/Courses";
import NavbarWithMegaMenu from "./components/Navbar";
import { useAuth } from "../../stores/Auth";
import NavbarAdmin from "./components/NavbarAdmin";

const Home = () => {
  const { getCategories, categories } = useCoursesStore((state) => state);
  const user = useAuth((state) => state.user);
  const [isSubbed, setIsSubbed] = useState(null);
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  // useEffect(()=>{
  //   const checkSub = async (id)=>{

  //     let res = await getOneSub(id)

  //   }

  //   if(user){
  //     //check if he has a subscription

  //     checkSub(user.id)

  //     // setIsSubbed()
  //   }
  // },[user])
  return (
    <div className="home  bg-gray-100 poppins">
      {/**navbar: logo login button  + hyperlinks(courses, Pricing, Q/A,  ) */}
      <React.Fragment>
        {user?.role ? (
          <NavbarAdmin />
        ) : (
          <NavbarWithMegaMenu isLogged={user ? true : false} />
        )}
      </React.Fragment>
      <Intro />
      {/* <Intro2 /> */}
      <section className=" w-[100%]   mt-5 mb-20  flex items-center justify-center flex-col gap-5 partners ">
        <div className="flex flex-row items-center justify-center gap-10 lg:gap-20 p-2 w-full opacity-50 ">
          <img
            src={toutApprendre}
            className="w-40 lg:w-44 h-12 invert text-gray-700"
            alt=""
          />
          <img src={tex} className="w-24" alt="" />
          <img src={alphrom} className="w-40 lg:w-44 h-12 invert" alt="" />
        </div>
      </section>
      {/* <Services /> */}
      <Courses categories={categories} />
      <Pricing />

      <QnA />
      <Contact />
      <FooterWithLogo />
    </div>
  );
};

export default Home;

import React from "react";
import  Header from "../Header";
import About from "../About";
import Services from "../Services";
import Blogs from "../Blogs";
import Context from "../Context";
import Testimonials from "../Testimonial"


function FirstPage() {
  return (
    <div className="ms-auto mx-auto ">
      <Header/>
      <About/>
      <Services/>
      <Blogs/>
      <Context/>
      <Testimonials/>
    </div>
  );
}

export default FirstPage;

import React from "react";
import Hero from "../component/home/Hero";
import Skills from "../component/home/Skills";
import Portfolio from "../component/home/portfolio/Portfolio";
import About from "../component/home/About";
import Testimonial from "../component/home/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <Skills />
        <Portfolio />
        <About />
        <Testimonial />
      </main>
    </>
  );
};

export default Home;

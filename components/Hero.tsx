import React from "react";
import Image from "next/image";
import Work from "./Work";
import Contact from "./Contact";
import HeroCarousel from "./Carousel";
import Profile from "./Profile";
import Administrasi from "./Administrasi";

const Hero = () => {
  return (
    // <!-- ========== MAIN CONTENT ========== -->
    <main id="content">
      <Work />
      <Administrasi />
      <HeroCarousel />
      <Profile />
      <Contact />
    </main>
  );
};

export default Hero;

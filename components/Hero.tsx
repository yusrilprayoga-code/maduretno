import React from "react";
import Image from "next/image";
import Work from "./Work";
import Contact from "./Contact";
import HeroCarousel from "./Carousel";
import Profile from "./Profile";

const Hero = () => {
  return (
    // <!-- ========== MAIN CONTENT ========== -->
    <main id="content">
      {/* <!-- Slider --> */}
      <HeroCarousel />
      {/* <!-- End Slider --> */}

      {/* <!-- Clients --> */}
     
      {/* <!-- End Clients --> */}

      <Work />
      <Profile />
      <Contact />
    </main>
  );
};

export default Hero;

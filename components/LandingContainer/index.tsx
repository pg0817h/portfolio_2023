import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";

const LandingContainer: React.FC = () => {
  useLayoutEffect(() => {
    gsap.to(".landing__container > .block", {
      y: -100,
      delay: 1.2,
      ease: "power4.out",
      stagger: 0.4,
      visibility: "visible",
      startAt: { y: 200 },
    });
    gsap.to(".landing__container", {
      scale: 2,
      ease: "strong.inOut",
      delay: 5.5,
      visibility: "visible",
      duration: 2,
      y: -80,
    });
  }, []);
  return (
    <div className="landing__container">
      <div className="block b-1"></div>
      <div className="block b-2"></div>
      <div className="block b-3"></div>
      <div className="block b-4"></div>
      <div className="block b-5"></div>
      <div className="block b-6"></div>
      <div className="block b-7"></div>
    </div>
  );
};
export default LandingContainer;

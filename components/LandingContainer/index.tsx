import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";

const LandingContainer: React.FC = () => {
  useLayoutEffect(() => {
    gsap.to(".container > .block", {
      y: -100,
      delay: 1.2,
      ease: "power4.out",
      stagger: 0.4,
      visibility: "visible",
      startAt: { y: 100 },
    });
    gsap.to(".container", {
      scale: 2,
      y: "140%",
      ease: "strong.inOut",
      delay: 5.5,
      visibility: "visible",
      duration: 2,
    });
  }, []);
  return (
    <div className={`container`}>
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

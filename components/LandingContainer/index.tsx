import React, { useEffect, useState } from "react";
import gsap from "gsap";

const LandingContainer: React.FC = () => {
  useEffect(() => {
    gsap.from(".container > .block", {
      y: "110%",
      delay: 1,
      stagger: 0.4,
      visibility: "visible",
      startAt: { y: "-10%" },
    });
    gsap.to(".container", {
      scale: 2,
      y: "140%",
      ease: "strong.inOut",
      delay: 5.5,
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

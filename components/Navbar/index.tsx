import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

const Navbar: React.FC = () => {
  useEffect(() => {
    gsap.to(".navbar > div", {
      y: 10,
      stagger: 0.08,
      ease: "expo.inOut",
      visibility: "visible",
      delay: 6,
      startAt: { y: -80 },
      duration: 1.6,
    });
    gsap.to(".site-menu > div", {
      y: 10,
      stagger: 0.1,
      ease: "expo.inOut",
      delay: 6.5,
      startAt: { y: -80 },
      duration: 1,
    });
  }, []);

  return (
    <div className={`navbar`}>
      <div className="site-info">{`Reach The Fullest`}</div>
      <div className="site-menu">
        <div className="menu-item">projects</div>
        <div className="menu-item">about</div>
        <div className="menu-item">contact</div>
      </div>
    </div>
  );
};
export default Navbar;

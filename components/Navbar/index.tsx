import React, { useEffect } from "react";
import gsap from "gsap";

const Navbar: React.FC = () => {
  useEffect(() => {
    gsap.from(".navbar > div", {
      y: "-80%",
      stagger: 0.08,
      ease: "expo.inOut",
      visibility: "visible",
      delay: 6,
      startAt: { y: 10 },
      duration: 1.6,
    });
    gsap.from(".site-menu > div", {
      y: "-80%",
      stagger: 0.1,
      ease: "expo.inOut",
      delay: 6.5,
      startAt: { y: 10 },
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

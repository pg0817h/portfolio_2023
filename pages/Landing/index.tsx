import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import LandingContainer from "../../components/LandingContainer";
import Navbar from "../../components/Navbar";

export default function LandingPage() {
  const titleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.to(".overlay", {
      y: "-2%",
      ease: "power2.out",
      delay: 5.3,
    }); //TODO: scale

    gsap.to(titleRef.current, {
      duration: 1.5,
      ease: "expo.inOut",
      visibility: "visible",
      delay: 6,
      stagger: 0.5,
      startAt: { y: -10 },
      y: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <LandingContainer />
      <div className="overlay"></div>
      <p className="title" ref={titleRef}>
        `MachineGeon K'abby'🔫`
      </p>
    </>
  );
}

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import LandingContainer from "../LandingContainer";

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
      <LandingContainer />
      <div className="overlay"></div>
      <p className="title" ref={titleRef}>
        `MachineGeon K'abby'🔫`
      </p>
    </>
  );
}

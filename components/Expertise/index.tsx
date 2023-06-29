import React, { useRef, useLayoutEffect, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import LineAnimation from "../lineAnimation";

export default function Expertise() {
  const expertiseRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".skill", {
      ease: "expo.inOut",
      backgroundPositionX: "0%",
      opacity: 1,
      stagger: 10,
      duration: 10,
      delay: 6,
      scrollTrigger: {
        start: "top center",
        end: "bottom top",
        trigger: ".skill",
        scrub: 1,
      },
    });
  }, [expertiseRef.current]);
  return (
    <div className="expertises my-10" ref={expertiseRef}>
      <LineAnimation target=".expertises" />
      <div className="expertisesText">Expertise</div>
      <div className="skill">React</div>
      <div className="skill">Next.js</div>
      <div className="skill">TypeScript</div>
    </div>
  );
}
Expertise.displayName = "Expertise";

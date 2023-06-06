import React, { useLayoutEffect, useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import LandingContainer from "../LandingContainer";

export default function LandingPage() {
  const titleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".overlay", {
      y: -500,
      ease: "power2.out",
      delay: 1.2,
    }); //TODO: scale

    gsap.to(titleRef.current, {
      duration: 1.5,
      ease: "expo.inOut",
      visibility: "visible",
      delay: 1,
      stagger: 0.5,
      startAt: { y: 0 },
      y: 100,
    });
    gsap.to(titleRef.current, {
      y: 300,
      delay: 10,
      duration: 10,
      scrollTrigger: {
        trigger: ".landingPage__container",
        start: "top top",
        scrub: true,
        end: "bottom top",
      },
    });
    gsap.to(".landing__container", {
      ease: "expo.inOut",
      delay: 1,
    });

    gsap.to(".landingPage__container", {
      opacity: 1,
    });
  }, []);

  return (
    <>
      <div className="landingPage__container">
        <LandingContainer />
        <section>
          <p className="title" ref={titleRef}>
            `MachineGeon K'abby'🔫`
          </p>
        </section>
        <section className="overlay"></section>
      </div>
    </>
  );
}

import React, { useLayoutEffect, useRef } from "react";
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
      delay: 5.3,
    }); //TODO: scale

    gsap.to(titleRef.current, {
      duration: 1.5,
      ease: "expo.inOut",
      visibility: "visible",
      delay: 6,
      stagger: 0.5,
      startAt: { y: 0 },
      y: 100,
    });
    gsap.to(".landingPage__container", {
      ease: "expo.inOut",
      delay: 6,
      scrollTrigger: {
        trigger: titleRef.current,
        start: `0px center`,
        end: `300px center`,
        scrub: true,
        onEnter: () => {
          console.log("onEnter");
          gsap.to(titleRef.current, {
            y: -300,
          });
        },
        onEnterBack: () => {
          gsap.to(titleRef.current, {
            y: 300,
          });
        },
      },
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

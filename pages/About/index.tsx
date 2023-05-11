import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import LandingContainer from "../../components/LandingContainer";
import Navbar from "../../components/Navbar";

export default function AboutPage() {
  const titleRef = useRef<HTMLParagraphElement>(null);

  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap.to(".overlay", {
      y: 230,
      ease: "power2.out",
      delay: 5.3,
      // scale: 0.5,
    }); //TODO: scale

    gsap.from(".title", {
      duration: 1.5,
      text: "Reach The Fullest",
      ease: "expo.inOut",
      visibility: "visible",
      delay: 6,
      stagger: 0.5,
      startAt: { y: 10 },
      y: -200,
    });
  }, []);

  return (
    <>
      <Navbar />
      <LandingContainer />
      <div className="overlay"></div>
      <p className="title" ref={titleRef}></p>
    </>
  );
}

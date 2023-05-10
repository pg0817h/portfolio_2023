import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import anime from "animejs";
import LandingContainer from "../../components/LandingContainer";
import Navbar from "../../components/Navbar";

export default function LandingPage() {
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.to(".overlay", {
      y: "100",
      ease: "power2.out",
      delay: 5.3,
      // scale: 0.5,
    }); //TODO: scale
    // anime.timeline().add({
    //   targets: ".title .letter",
    //   translateY: [-200, 0],
    //   easing: "easeOutExpo",
    //   duration: 1400,
    //   delay: (el, i) => 6500 + 30 * i,
    // });
    // const title = titleRef.current!;
    // const text = title.textContent ?? "";
    // const splitText = text.split("");
    // const newTitle = splitText
    //   .map((letter) => `<span className="letter">${letter}</span>`)
    //   .join("");
    // title.innerHTML = newTitle;
  }, []);
  return (
    <>
      <Navbar />
      <LandingContainer />
      <div className="overlay"></div>
      {/* <p className="title" ref={titleRef}>
        Reach The Fullest
      </p> */}
    </>
  );
}

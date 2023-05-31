import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProjectPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(".project__container", {
      ease: "expo.inOut",
      visibility: "visible",
      delay: 6,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <div className="project__container" ref={scrollRef}>
        <div>
          <div className="project__container-title">
            <h1 className="anime-js-title">Creative mix</h1>
          </div>
          <div className="project__container-subtitle">
            <p>Visual design</p>
          </div>

          <div className="project__container-images">
            <div className="project__image project__image-one"></div>
            <div className="project__image project__image-two"></div>
            <div className="project__image project__image-three"></div>
            <div className="project__image project__image-four"></div>
          </div>

          <div className="project-next-link">
            <a href="project.html">Next</a>
          </div>
        </div>
      </div>
    </>
  );
}

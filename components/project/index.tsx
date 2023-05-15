import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function ProjectPage() {
  const { scroll } = useLocomotiveScroll();
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
      <div className="project__container" ref={scrollRef} data-scroll-section>
        <div>
          <div className="project__container-title">
            <h1 className="anime-js-title">Creative mix</h1>
          </div>
          <div className="project__container-subtitle">
            <p>Visual design</p>
          </div>

          <div className="project__container-images">
            <div
              className="project__image project__image-one"
              data-scroll
              data-scroll-speed="1"
            ></div>
            <div
              className="project__image project__image-two"
              data-scroll
              data-scroll-speed="2"
            ></div>
            <div
              className="project__image project__image-three"
              data-scroll
              data-scroll-speed="3"
            ></div>
            <div
              className="project__image project__image-four"
              data-scroll
              data-scroll-speed="4"
            ></div>
          </div>

          <div className="project-next-link" data-scroll>
            <a href="project.html">Next</a>
          </div>
        </div>
      </div>
    </>
  );
}

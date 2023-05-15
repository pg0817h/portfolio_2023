import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap } from "gsap";
import LineAnimation from "../lineAnimation";

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    gsap.to(".about__container", {
      ease: "expo.inOut",
      visibility: "visible",
      delay: 6,
      display: "grid",
    });

    // Log the current scroll position
    console.log("scroll", scroll);
    console.log("Scroll position:", scroll?.scroll.y);

    // Log the current scroll velocity
    console.log("Scroll velocity:", scroll?.scroll.yVelocity);
  }, [scroll]);

  return (
    <>
      <div className="about__container" data-scroll-section>
        {/* <LineAnimation /> */}
        <div className="intro">
          <p>
            Hey there! I'm a frontend developer with experience building
            multiple websites using Next.js, TypeScript, React, and JavaScript.
            I absolutely love helping people and building websites that solve
            problems.
          </p>
        </div>
        <div className="skills__container">
          <div
            className="skills"
            ref={scrollRef}
            data-scroll
            data-scroll-offset="-10%"
            data-scroll-speed="3"
            data-scroll-target=".intro"
          >
            <p>
              If you have any questions or need help with building a website,
              solving a problem, or anything related to TypeScript, React, or
              JavaScript, feel free to reach out to me.
            </p>
            <p>
              If you have any questions or need help with building a website,
              solving a problem, or anything related to TypeScript, React, or
              JavaScript, feel free to reach out to me.
            </p>
            <p>
              If you have any questions or need help with building a website,
              solving a problem, or anything related to TypeScript, React, or
              JavaScript, feel free to reach out to me.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

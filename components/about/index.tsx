import React, { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".about__container", {
      ease: "expo.inOut",
      visibility: "visible",
      delay: 6,
      display: "grid",
    });
    gsap.to(aboutRef.current, {
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: `0px center`,
        end: `1000px center`,
        scrub: true,
        onEnter: () => {
          gsap.to("body", {
            backgroundColor: "black",
          });
        },
        onLeave: () => {
          gsap.to("body", {
            backgroundColor: "transparent",
          });
        },
        onEnterBack: () => {
          gsap.to("body", {
            backgroundColor: "black",
          });
        },
        onLeaveBack: () => {
          gsap.to("body", {
            backgroundColor: "transparent",
          });
        },
      },
    });
  }, [aboutRef.current]);

  return (
    <div className="about__section" ref={aboutRef}>
      <div className="about__container" ref={scrollRef}>
        {/* <LineAnimation /> */}
        <div className="about__intro">
          <div className="intro">
            <p className="about__des">
              Hey there! I'm a frontend developer with experience building
              multiple websites using Next.js, TypeScript, React, and
              JavaScript. I absolutely love helping people and building websites
              that solve problems.
            </p>
          </div>
        </div>

        <div className="skills__container">
          <div className="skills">
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
      {/* <section className="expertises">
        <h4 data-scroll className="skills__title">
          <span>expertises</span>
        </h4>
        <ul className="skills__list">
          <li id="skill-react">
            <span
              className="skills__list-item-label"
              data-scroll
              data-scroll-repeat="true"
              data-scroll-offset="55%, 45%"
              data-scroll-target="#skill-react"
            >
              React
            </span>
          </li>
          <li id="skill-next">
            <span
              className="skills__list-item-label"
              data-scroll
              data-scroll-repeat="true"
              data-scroll-offset="55%, 45%"
              data-scroll-target="#skill-next"
            >
              Next.js
            </span>
          </li>
          <li id="skill-ts">
            <span
              className="skills__list-item-label"
              data-scroll
              data-scroll-repeat="true"
              data-scroll-offset="55%, 45%"
              data-scroll-target="#skill-ts"
            >
              TypeScript
            </span>
          </li>
          <li id="skill-js">
            <span
              className="skills__list-item-label"
              data-scroll
              data-scroll-repeat="true"
              data-scroll-offset="55%, 45%"
              data-scroll-target="#skill-js"
            >
              Javascript
            </span>
          </li>
        </ul>
      </section> */}
    </div>
  );
}

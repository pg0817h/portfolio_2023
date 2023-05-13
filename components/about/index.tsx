import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let locomotiveScroll;
    gsap.to(".about__container", {
      ease: "expo.inOut",
      visibility: "visible",
      delay: 6,
    });
    import("locomotive-scroll").then((locomotiveModule) => {
      locomotiveScroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });

      console.log("scroll object created successfully:", locomotiveScroll);
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);
  // useEffect(() => {
  //   let locomotiveScroll;
  //   gsap.registerPlugin(ScrollTrigger);
  //   const animation = gsap.to(scrollRef.current, {
  //     y: -100,
  //     duration: 1,
  //     ease: "power2.inOut",
  //     startAt: { y: 200 },
  //   });

  //   ScrollTrigger.create({
  //     trigger: ".skills",
  //     start: "top center",
  //     end: "bottom center",
  //     animation: animation,
  //     scrub: true,
  //   });
  //   gsap.to(".about__container", {
  //     ease: "expo.inOut",
  //     visibility: "visible",
  //     delay: 6,
  //   });
  // }, []);

  return (
    <>
      <div className="about__container" data-scroll-section>
        <p className="intro" data-scroll>
          Hey there! I'm a frontend developer with experience building multiple
          websites using Next.js, TypeScript, React, and JavaScript. I
          absolutely love helping people and building websites that solve
          problems.
        </p>

        <div className="skills" ref={scrollRef}>
          <p data-scroll data-scroll-speed="2">
            If you have any questions or need help with building a website,
            solving a problem, or anything related to TypeScript, React, or
            JavaScript, feel free to reach out to me.
          </p>
          <p data-scroll data-scroll-speed="2">
            If you have any questions or need help with building a website,
            solving a problem, or anything related to TypeScript, React, or
            JavaScript, feel free to reach out to me.
          </p>
          <p data-scroll data-scroll-speed="2">
            If you have any questions or need help with building a website,
            solving a problem, or anything related to TypeScript, React, or
            JavaScript, feel free to reach out to me.
          </p>
          {/* ... */}
        </div>
      </div>
    </>
  );
}

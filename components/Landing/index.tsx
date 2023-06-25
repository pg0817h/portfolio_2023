import React, { useLayoutEffect, useRef, forwardRef, Ref } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import LandingContainer from "../LandingContainer";

interface ChildComponentProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const LandingPage = forwardRef<HTMLDivElement, ChildComponentProps>(
  (props, forwardedRef) => {
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
        startAt: { y: -200 },
        y: 0,
      });

      gsap.to(titleRef.current, {
        delay: 2,
        y: innerHeight - 400,
        duration: 5,
        scrollTrigger: {
          trigger: ".landingPage__container",
          start: "center center",
          end: "bottom top",
          scrub: 1.2,
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
        <div className="landingPage__container" ref={props.forwardedRef}>
          <LandingContainer />
          <section>
            <span className="title" ref={titleRef}>
              박건형 Geonhyeong
            </span>
          </section>
          <section className="overlay"></section>
        </div>
      </>
    );
  }
);
export default LandingPage;

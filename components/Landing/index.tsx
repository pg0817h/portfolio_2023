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
        startAt: { y: -100 },
        y: 0,
      });

      gsap.to(titleRef.current, {
        y: 300,
        delay: 2,
        duration: 7,
        scrollTrigger: {
          trigger: ".landingPage__container",
          start: "top center",
          scrub: true,
          end: "bottom bottom",
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
          <section ref={props.forwardedRef}>
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

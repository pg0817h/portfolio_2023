import React, { useRef, useLayoutEffect, Ref, forwardRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

interface ChildComponentProps {
  forwardedRef: Ref<HTMLDivElement>;
}

const Contact = forwardRef<HTMLDivElement, ChildComponentProps>(
  (props, forwardedRef) => {
    const contactRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".skill", {});
    }, [contactRef.current]);
    return (
      <div className="contact my-20" ref={props.forwardedRef}>
        <div className="container" ref={contactRef}>
          <h1 className="contactTitle">Get In Touch</h1>
          <p>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <a href="mailto:abbyghp0814@gmail.com" className="email-link">
            Contact me
          </a>
        </div>
      </div>
    );
  }
);

export default Contact;

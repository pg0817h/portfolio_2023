import React, { useRef, useLayoutEffect, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".skill", {});
  }, [contactRef.current]);
  return (
    <div className="contact">
      <div className="container" ref={contactRef}>
        <h1 className="contactTitle">Get In Touch</h1>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a href="mailto:abbyghp0814@gmail.com" className="email-link">
          Contact me
        </a>
      </div>
    </div>
  );
}

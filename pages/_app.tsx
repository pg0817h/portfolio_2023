import "../styles/globals.css";
import "../styles/landing.css";
import "../styles/about.css";
import "../styles/project.css";
import "../styles/contact.css";
import "tailwindcss/tailwind.css";

import Navbar from "@/components/Navbar";
import React, { useLayoutEffect, useRef } from "react";
import type { AppProps } from "next/app";
import gsap from "gsap";

export default function App({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    gsap.to(".page__container", {
      delay: 1,
    });
    gsap.to("body", {
      delay: 1,
      overflow: "auto",
    });
  }, []);
  return (
    <div className="page__container" ref={containerRef}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

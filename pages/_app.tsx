import "../styles/globals.css";
import "../styles/landing.css";
import "../styles/about.css";
import "../styles/project.css";
import "../public/locomotive-scroll.css";
import "tailwindcss/tailwind.css";

import Navbar from "@/components/Navbar";
import React, { useLayoutEffect, useRef } from "react";
import type { AppProps } from "next/app";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import gsap from "gsap";

export default function App({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
  useLayoutEffect(() => {
    gsap.to(".page__container", {
      delay: 6,
    });
    gsap.to("body", {
      delay: 6,
      overflow: "auto",
    });
  }, []);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 1,
      }}
      watch={[]}
      onLocationChange={(scroll: any) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={containerRef}
    >
      <div className="page__container" data-scroll-container ref={containerRef}>
        <Navbar data-scroll-section />
        <Component {...pageProps} />
      </div>
    </LocomotiveScrollProvider>
  );
}

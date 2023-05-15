import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LandingPage from "../components/Landing";
import AboutPage from "@/components/about";
import ProjectPage from "@/components/project";
export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutPage />
      <ProjectPage />
    </>
  );
}

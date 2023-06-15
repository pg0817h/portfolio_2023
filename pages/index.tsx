import React, { useRef } from "react";
import LandingPage from "../components/Landing";
import AboutPage from "@/components/about";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import SideNav from "@/components/SideNav";
export default function Home() {
  const landingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <SideNav
        landingRef={landingRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div>
        <LandingPage forwardedRef={landingRef} />
        <AboutPage forwardedRef={aboutRef} />
      </div>

      <Expertise />
      <div>
        <Contact forwardedRef={contactRef} />
      </div>
    </>
  );
}

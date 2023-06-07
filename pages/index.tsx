import React from "react";
import LandingPage from "../components/Landing";
import AboutPage from "@/components/about";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <div>
        <LandingPage />
        <AboutPage />
      </div>

      <Expertise />
      <div>
        <Contact />
      </div>
    </>
  );
}

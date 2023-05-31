import React from "react";
import LandingPage from "../components/Landing";
import AboutPage from "@/components/about";
import ProjectPage from "@/components/project";
export default function Home() {
  return (
    <>
      <div>
        <LandingPage />
        <AboutPage />
      </div>
      <div>
        <ProjectPage />
      </div>
    </>
  );
}

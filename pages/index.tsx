import React from "react";
import Navbar from "@/components/Navbar";
import LandingPage from "../components/Landing";
import AboutPage from "@/components/about";
export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutPage />
    </>
  );
}

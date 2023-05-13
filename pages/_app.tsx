import "../styles/globals.css";
import "../styles/landing.css";
import "../styles/about.css";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/Navbar";
import React from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

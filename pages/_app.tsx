import "../styles/globals.css";
import "../styles/landing.css";
import "tailwindcss/tailwind.css";
import React from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

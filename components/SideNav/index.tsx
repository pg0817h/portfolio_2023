import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface SideNavProps {
  landingRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const SideNav: React.FC<SideNavProps> = ({
  landingRef,
  aboutRef,
  contactRef,
}) => {
  useLayoutEffect(() => {
    gsap.to(".nav", {
      ease: "expo.inOut",
      visibility: "visible",
      delay: 2,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <ul className="nav__list">
            <li
              className="nav__list-item"
              onClick={() => {
                aboutRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              about
            </li>
            <li
              className="nav__list-item"
              onClick={() =>
                contactRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              contact
            </li>
            <li className="nav__list-item"></li>
          </ul>
          <div
            className="nav__title"
            onClick={() =>
              landingRef.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Geonhyeong Chun
          </div>
        </div>
      </nav>
    </>
  );
};
export default SideNav;

import React, { useRef, useLayoutEffect, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import LineAnimation from "../lineAnimation";

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".about__container", {
      ease: "expo.inOut",
      visibility: "visible",
      delay: 1,
      display: "grid",
    });
    gsap.to(aboutRef.current, {
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: `0px center`,
        end: `2500px center`,
        scrub: true,
        onEnter: () => {
          gsap.to("body", {
            backgroundColor: "black",
          });
        },
        onLeave: () => {
          gsap.to("body", {
            backgroundColor: "transparent",
          });
        },
        onEnterBack: () => {
          gsap.to("body", {
            backgroundColor: "black",
          });
        },
        onLeaveBack: () => {
          gsap.to("body", {
            backgroundColor: "transparent",
          });
        },
      },
    });

    gsap.to(".skills", {
      y: -300,
      scrollTrigger: {
        trigger: ".about__container",
        start: "top top",
        scrub: true,
        end: "bottom top",
      },
    });
    ScrollTrigger.create({
      trigger: ".about__intro",
      start: "top 100px",
      // end: ".expertises top",
      pin: true,
      scrub: true,
      pinSpacing: false,
    });
  }, [aboutRef.current]);

  return (
    <div className="about__section" ref={aboutRef}>
      <div className="about__container" ref={scrollRef}>
        <div className="about__intro">
          <div className="about">
            <LineAnimation target=".about__section" />
            <div className="intro">
              <h1 className="text-5xl text-slate-200">Abby GeonHyeong Chun</h1>
              <h3 className="text-xl mt-3 text-slate-200">
                Front End Engineer at U.S. Bancorp
              </h3>
              <p className="about__des text-base max-w-xs mt-4 text-slate-400">
                I build accessible, inclusive products and digital experiences
                for the web.
              </p>
            </div>
          </div>
        </div>

        <div className="skills__container text-slate-400">
          <div className="skills">
            <section
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="about me"
            >
              <p className="mb-4">
                I've been working as a software engineer, and from the very
                beginning, I've always had a passion for problem-solving and
                finding creative ways to resolve challenges. I thrive on the
                satisfaction of overcoming obstacles and delivering innovative
                solutions.
              </p>
              <p className="mb-4">
                Throughout my career, I've tackled a diverse range of projects,
                refining my skills and expanding my knowledge. I enjoy the
                thrill of diving into complex problems and working alongside
                talented teams to achieve success.
              </p>
              <p className="mb-4">
                Creating intuitive and seamless user experiences is at the core
                of my work. I take pride in crafting efficient and visually
                appealing software that exceeds expectations.
              </p>
              <p>
                Beyond coding, you'll find me seeking adventure and inspiration
                in various activities. Whether it's exploring new hiking trails
                or engaging in creative pursuits, I find that a well-rounded
                lifestyle enhances my ability to think outside the box.
              </p>
            </section>

            <ol>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2022 to Present"
                  >
                    2022 — Present
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base"
                          href="https://www.usbank.com/index.html"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Front End Engineer - U.S. Bancorp </span>
                        </a>
                      </div>
                      <div>
                        <p className="mt-2 text-sm leading-normal text-slate-500">
                          Throughout my work, I've made significant
                          contributions to enhance the maintainability and
                          scalability of code by refactoring and modularizing
                          components into separate pages and modules. I
                          implemented a performance-boosting timer for the
                          landing and confirmation pages, integrating it
                          seamlessly with AppDynamics. Additionally, I played a
                          key role in onboarding new team members, helping them
                          quickly become productive and valuable contributors.
                          Leveraging my expertise in modern web development, I
                          efficiently integrated Apollo Client with GraphQL,
                          showcasing my ability to work with cutting-edge
                          technologies. During critical release periods, I
                          demonstrated exceptional problem-solving skills by
                          swiftly resolving defects, collaborating with
                          cross-functional teams to identify root causes, and
                          implementing effective solutions. My ability to work
                          independently under pressure ensured timely delivery
                          of high-quality software with minimal impact on end
                          users.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                              Apollo Client
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                              SCSS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                              Jest
                            </div>
                          </li>
                        </ul>
                      </div>
                    </h3>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

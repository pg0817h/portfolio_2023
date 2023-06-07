import React, { useEffect, useRef, RefObject } from "react";
import Image from "next/image";
import project1 from "../../images/project1.png";
import { gsap } from "gsap";

interface ProjectProps {
  projectRef: RefObject<HTMLDivElement>;
}

export default function ProjectPage({ projectRef }: ProjectProps) {
  useEffect(() => {
    gsap.to(".project", {
      ease: "expo.inOut",
      visibility: "visible",
      delay: 1,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <section
        className="project mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        ref={projectRef}
      >
        <div className="top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
        </div>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base"
                      href="https://github.com/Creaminal-Bakery"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Build a Spotify Connected App"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Creaminal Bakery
                        <span className="inline-block">App</span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Collaborated with a team to develop a web platform for a
                    homemade bakery business. Implemented optimized user order
                    form, review page, and confirmation page to streamline the
                    ordering process, enhancing user experience and customer
                    satisfaction.
                  </p>
                </div>

                <Image
                  src={project1}
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  alt=""
                  width={200}
                  height={48}
                />
              </div>
            </li>
            <li className="mb-12" id="last-project">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base"
                      href="https://github.com/pg0817h/kartrade"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Build a Spotify Connected App"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Kartrade
                        <span className="inline-block">App</span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    This project focuses on creating a web platform that caters
                    to the thriving culture of trading cards for K-pop stars in
                    Korea. This trading industry has gained immense popularity,
                    and we aim to provide a seamless and convenient platform for
                    people to engage in card trading. With the web platform,
                    users can easily navigate through a variety of trading
                    options, leveraging features such as sorting and search
                    functionality.
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">
                        Mantine
                      </div>
                    </li>
                  </ul>
                </div>

                <Image
                  src={project1}
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  alt=""
                  width={200}
                  height={48}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

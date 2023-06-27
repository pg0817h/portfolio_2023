import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

type MyComponentProps = {
  target: string;
};
const LineAnimation: React.FC<MyComponentProps> = ({ target }) => {
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(lineRef.current, {
      width: "100%",
      duration: 0.5,
      scrub: true,
      scrollTrigger: {
        trigger: target,
        start: "top top",
      },
    });
  }, [lineRef.current]);

  return (
    <div
      ref={lineRef}
      style={{
        width: "0%",
        height: "2px",
        backgroundColor: "white",
        marginTop: "10%",
      }}
    />
  );
};

export default LineAnimation;

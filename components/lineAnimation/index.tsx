import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const LineAnimation = () => {
  const lineRef = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      {
        backgroundColor: "none",
      },
      {
        delay: 6,
        duration: 2,
        ease: "none",
        backgroundColor: "black",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
        },
      }
    );
  }, [scroll]);

  return <div ref={lineRef} style={{ width: "100%", height: "2px" }} />;
};

export default LineAnimation;

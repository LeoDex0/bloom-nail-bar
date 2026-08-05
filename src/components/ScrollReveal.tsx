"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  as?: "div" | "section";
}

export default function ScrollReveal({
  children,
  className,
  y = 36,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  const Comp = as as "div";

  return (
    <Comp ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Comp>
  );
}

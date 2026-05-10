"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const formatter = new Intl.NumberFormat("en-IN");

interface AnimatedNumberProps {
  /** Target number to count up to */
  value: number;
  /** Appended after the number, e.g. "+" or "%" */
  suffix?: string;
  /** Animation duration in seconds. Default 1.5. */
  duration?: number;
  className?: string;
}

export function AnimatedNumber({
  value,
  suffix = "",
  duration = 1.5,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();
  const hasAnimated = useRef(false);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReduced) {
      setDisplayed(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplayed(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, prefersReduced]);

  const formatted = formatter.format(displayed);
  const finalFormatted = formatter.format(value);

  return (
    <span
      ref={ref}
      className={className}
      // Screen readers announce the final value immediately — no counting
      aria-label={`${finalFormatted}${suffix}`}
    >
      <span aria-hidden="true">
        {formatted}
        {suffix}
      </span>
    </span>
  );
}

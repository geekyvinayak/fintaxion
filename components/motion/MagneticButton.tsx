"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";
import { type ReactNode, useRef } from "react";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "style"> {
  children: ReactNode;
  /** Pixel radius within which the magnet activates. Default 60. */
  radius?: number;
  /** Fraction of cursor offset applied as translation. Default 0.35. */
  strength?: number;
}

export function MagneticButton({
  children,
  radius = 60,
  strength = 0.35,
  className,
  disabled,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const prefersReduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 20, mass: 0.1 });
  const y = useSpring(rawY, { stiffness: 200, damping: 20, mass: 0.1 });

  function handlePointerMove(e: React.PointerEvent) {
    // Disable on touch and reduced-motion
    if (prefersReduced || e.pointerType === "touch" || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    if (Math.hypot(dx, dy) < radius) {
      rawX.set(dx * strength);
      rawY.set(dy * strength);
    }
  }

  function handlePointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}

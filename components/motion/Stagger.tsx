"use client";

import { motion, useInView, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { useRef, type ReactNode } from "react";

// ─── Container ────────────────────────────────────────────────────────────────

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child, in ms. Default 60. */
  interval?: number;
}

const containerVariants = {
  hidden: {},
  visible: (interval: number) => ({
    transition: { staggerChildren: interval / 1000 },
  }),
};

function StaggerRoot({ children, className, interval = 60 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-64px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={interval}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
}

function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants} {...props}>
      {children}
    </motion.div>
  );
}

// ─── Exports ──────────────────────────────────────────────────────────────────

/**
 * Usage:
 *   <Stagger className="grid grid-cols-3 gap-6">
 *     <Stagger.Item>...</Stagger.Item>
 *     <Stagger.Item>...</Stagger.Item>
 *   </Stagger>
 */
export const Stagger = Object.assign(StaggerRoot, { Item: StaggerItem });

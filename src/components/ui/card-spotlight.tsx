"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 400,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  // Static position for the radial gradient
  const mouseX = useMotionValue(radius); // Set initial X value
  const mouseY = useMotionValue("50"); // Set initial Y value

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      {...props}
    >
      {/* Static Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        <CanvasRevealEffect
          animationSpeed={5}
          containerClassName="bg-transparent absolute inset-0 pointer-events-none"
          colors={[
            [59, 130, 246], // Blue
            [139, 92, 246], // Purple
          ]}
          dotSize={3}
        />
      </motion.div>

      {/* Children passed to the component */}
      {children}
    </div>
  );
};

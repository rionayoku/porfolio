import * as React from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { cn } from "../lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
}

const defaultFramerProps = {
    variants: {
        initial: { opacity: 0, y: 20, rotateX: -90, filter: "blur(5px)" },
        animate: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -20, rotateX: 90, filter: "blur(5px)" },
    },
    // FIX: Cast `type: "spring"` to a const to fix a TypeScript type error.
    // Framer Motion's `transition.type` property expects a specific string literal (e.g., "spring", "tween"),
    // but TypeScript infers it as a generic `string` by default. `as const` ensures the correct literal type.
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
};

export function WordRotate({
  words,
  duration = 2500,
  framerProps = defaultFramerProps,
  className,
}: WordRotateProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="flex justify-center items-center min-h-[4rem]" style={{ perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...framerProps}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: "fadeIn" | "fadeInUp" | "fadeInRight" | "fadeInLeft" | "zoomIn" | "bounce";
  delay?: number; // in seconds
  duration?: number; // in seconds
  threshold?: number; // intersection threshold (0 to 1)
  className?: string;
  once?: boolean; // animate only once when it comes into view
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const shouldAnimate = once ? isVisible : isVisible;

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } },
    },
    bounce: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 15, 
          delay 
        } 
      },
    },
  };

  const selectedVariant = variants[animation];

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={selectedVariant}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedElement;
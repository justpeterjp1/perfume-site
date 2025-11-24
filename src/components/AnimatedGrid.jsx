// AnimatedGrid.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedGrid
 * Wrap any grid of cards with this component to get
 * subtle fade + slide-in animations as they scroll into view.
 *
 * Props:
 * - children: React nodes (cards)
 * - columns: Tailwind grid classes string (default: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4")
 * - gap: Tailwind gap class (default: "gap-6")
 */
export default function AnimatedGrid({ children, columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", gap = "gap-6" }) {
  // Container for staggered animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08, // small stagger
      },
    },
  };

  // Each item animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Wrap children in motion.divs
  const animatedChildren = React.Children.map(children, (child) => (
    <motion.div variants={item}>{child}</motion.div>
  ));

  return (
    <motion.div
      className={`grid ${columns} ${gap}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {animatedChildren}
    </motion.div>
  );
}

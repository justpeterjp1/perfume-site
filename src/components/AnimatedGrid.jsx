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
export function AnimatedGrid({ children, columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", gap = "gap-6" }) {
  
  // Each child animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className={`grid ${columns} ${gap}`}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.05 }} // stagger effect
          style={{ willChange: "opacity, transform" }} // hint browser for smoother animation
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}



export function FadeInOnView({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
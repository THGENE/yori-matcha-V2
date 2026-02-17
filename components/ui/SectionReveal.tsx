import { motion } from "framer-motion";
import React from "react";

export default function SectionReveal({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

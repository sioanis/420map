import React from "react";
import { motion } from "framer-motion";

export function Switch({ isOn, ...props }) {
  const className = `switch ${isOn ? "on" : "off"}`;

  return (
    <div style={{ right: "20px", top: "20px", position: "absolute" }}>
      <motion.div animate className={className} {...props}>
        <motion.div animate />
      </motion.div>
    </div>
  );
}

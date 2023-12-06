"use client";
import { motion } from "framer-motion";
import styles from "./LoopLine.module.css";

function LoopLine() {
  const variants = {
    hidden: {
      x: "110%",
    },
    visible: {
      x: -450,
      linear: "linear",
      transition: { repeat: Infinity, duration: 40 },
    },
  };

  return (
    <div className={styles.loop_container}>
      <motion.p initial="hidden" animate="visible" variants={variants}>
        отримуй знижку <span>-10% за онлайн виклик інженера</span>
      </motion.p>
    </div>
  );
}

export default LoopLine;

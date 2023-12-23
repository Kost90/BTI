"use client";
import { Box } from "@mui/material";
import { whyWecontent } from "./whyweData";
import { contrCards, elips } from "./stylesconstans";
import { text } from "./whyweData";
import styles from "./Whywe.module.css";
import { motion } from "framer-motion";

const WhyWe = () => {
  const Variants = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    visible: {
      opacity: 1,
      y: 0,
      ease: "easeOut",
    },
  };
  return (
    <div className={styles.contr_content}>
      <motion.h4
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ amount: 0.3, once: true }}
        variants={Variants}
        className={styles.h4_hero}
      >
        ЧОМУ МИ?
      </motion.h4>
      <Box sx={contrCards}>
        {whyWecontent.map((item, i) => (
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 0.4,
              delay: i * 0.2,
            }}
            viewport={{ amount: 0.1, once: true }}
            variants={Variants}
            key={i}
            className={styles.card}
          >
            <Box sx={elips}>{item.number}</Box>
            <h5>{item.title}</h5>
            <h6>{item.text}</h6>
          </motion.div>
        ))}
      </Box>
      <h4 className={styles.h4_bottom}>{text}</h4>
    </div>
  );
};

export default WhyWe;

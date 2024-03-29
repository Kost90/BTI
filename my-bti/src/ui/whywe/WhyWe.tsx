"use client";
import { Box } from "@mui/material";
import { whyWecontent } from "./whyweData";
import { contrCards, elips } from "./stylesconstans";
import styles from "./Whywe.module.css";
import { motion, useInView } from "framer-motion";
import { popUpOpacityVariant } from "@/constants/animation";

const WhyWe = () => {

  return (
    <div className={styles.contr_content}>
      <motion.h1
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ amount: 0.3, once: true }}
        variants={popUpOpacityVariant}
        className={styles.h1_hero}
      >
        ЧОМУ МИ?
      </motion.h1>
      <Box sx={contrCards}>
        {whyWecontent.map((item, i) => (
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 0.3,
              delay: i * 0.1,
            }}
            viewport={{ amount: 0.1, once: true }}
            variants={popUpOpacityVariant}
            key={i}
            className={styles.card}
          >
            <Box sx={elips}>{item.number}</Box>
            <h5>{item.title}</h5>
            <h6>{item.text}</h6>
          </motion.div>
        ))}
      </Box>
    </div>
  );
};

export default WhyWe;

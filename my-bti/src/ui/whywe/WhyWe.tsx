"use client";
import { Box } from "@mui/material";
import { whyWecontent } from "./whyweData";
import { contrCards, elips } from "./stylesconstans";
import styles from "./Whywe.module.css";
import { motion, useInView } from "framer-motion";
import { popUpOpacityVariant } from "@/constants/animation";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { addTheme } from "@/lib/features/theme/ThemeSlicer";

const WhyWe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref,{amount:0.3})
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(isInView){
      dispatch(addTheme('dark'))
    }
  },[isInView])
  
  return (
    <div ref={ref} className={styles.contr_content}>
      <motion.h4
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ amount: 0.3, once: true }}
        variants={popUpOpacityVariant}
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

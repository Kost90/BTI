'use client'
import { Box, Typography } from "@mui/material";
import { whyWecontent } from "./whyweData";
import {
  contrContent,
  contrCards,
  card,
  elips,
  titel,
  titelCard,
} from "./stylesconstans";
import { text } from "./whyweData";
import styles from './Whywe.module.css'

const WhyWe = () => {
  return (
    <div className={styles.contr_content}>
      <h4 className={styles.h4_hero}>
        ЧОМУ МИ?
      </h4>
      <Box sx={contrCards}>
        {whyWecontent.map((item, i) => (
          <div key={i} className={styles.card}>
            <Box sx={elips}>{item.number}</Box>
            <h5>{item.title}</h5>
            <h6>{item.text}</h6>
          </div>
        ))}
      </Box>
      <h4 className={styles.h4_bottom}>{text}</h4>
    </div>
  );
};

export default WhyWe;

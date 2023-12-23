"use client";
import { motion} from "framer-motion";
import styles from "./CardList.module.css";
import Card from "@/components/card/Card";

const CardList = () => {

  const MotionCardComponent = motion(Card)
  
  return (
    <section className={styles.card_list_section}>
      <div>
        <motion.h4
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.3}}
          className={styles.h4}
        >
          НАШІ ПОСЛУГИ:
        </motion.h4>
        <MotionCardComponent 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.4}}/>
      </div>
    </section>
  );
};

export default CardList;

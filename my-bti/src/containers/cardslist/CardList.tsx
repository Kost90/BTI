"use client";
import { motion } from "framer-motion";
import styles from "./CardList.module.css";
import Card from "@/components/card/Card";

const CardList = () => {

  return (
    <section className={styles.card_list_section}>
      <div>
        <motion.h1
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className={styles.h4}
        >
          НАШІ ПОСЛУГИ:
        </motion.h1>
        <Card />
      </div>
    </section>
  );
};

export default CardList;

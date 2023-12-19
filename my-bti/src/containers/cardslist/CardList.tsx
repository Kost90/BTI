"use client";
import { motion} from "framer-motion";
import styles from "./CardList.module.css";
import Card from "@/components/card/Card";

const CardList = () => {
  
  return (
    <section className={styles.card_list_section}>
      <div>
        <motion.h4
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.h4}
        >
          НАШІ ПОСЛУГИ:
        </motion.h4>
        <Card />
      </div>
    </section>
  );
};

export default CardList;

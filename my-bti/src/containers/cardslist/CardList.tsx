"use client";
import { motion, useInView } from "framer-motion";
import styles from "./CardList.module.css";
import Card from "@/components/card/Card";
import { useAppDispatch } from "@/lib/hooks";
import { addTheme } from "@/lib/features/theme/ThemeSlicer";
import { useEffect, useRef } from "react";

const CardList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isInView) {
      dispatch(addTheme("dark"));
    }
  }, [isInView]);

  // const MotionCardComponent = motion(Card);

  return (
    <section ref={ref} className={styles.card_list_section}>
      <div>
        <motion.h4
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className={styles.h4}
        >
          НАШІ ПОСЛУГИ:
        </motion.h4>
        {/* <MotionCardComponent
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
        /> */}
        <Card/>
      </div>
    </section>
  );
};

export default CardList;

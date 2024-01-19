"use client";
import styles from "./ListServices.module.css";
import themestyles from "../../../containers/themecontainer/ThemeContainer.module.css";
import { cardContent } from "@/constants/CardsData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ListServices() {
  return (
    <div className={themestyles.text_content_book}>
      <h1 className={styles.h1}>
        Ми надаємо наступні послуги в сфері нерухомості:
      </h1>
      <motion.div
        className={styles.card_wrapper}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {cardContent.map((item,i) => (
          <div className={styles.card_container} key={i}>
            <Image src={item.src} alt="icon" />
            <motion.h2>{item.title}</motion.h2>
            <motion.ul>
              {item.services.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </motion.ul>
            <button type="button">
              <Link href={item.path} key={item.id}>
                Детальніше
              </Link>
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ListServices;

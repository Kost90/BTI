"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./MenuMobile.module.css";

type HamburgerProps = {
  onClick: () => void;
  isOpen: boolean;
};

const MenuMobile = memo(({ onClick, isOpen }: HamburgerProps) => {
  const MenuVariants = {
    hidden: {
      y: "-50vh",
    },
    visible: {
      y: "0vh",
      transition: { duration: 0.5 },
    },
    exit: {
      y: "-50vh",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={isOpen ? "visible" : "exit"}
      variants={MenuVariants}
      className={styles.menu}
    >
      <div className={styles.div_menu}>
        <Link
          onClick={onClick}
          href="/"
          color="inherit"
          className={styles.link}
        >
          Головна
        </Link>
        <Link
          onClick={onClick}
          href="/aboutus"
          color="inherit"
          className={styles.link}
        >
          Про нас
        </Link>
        <Link
          onClick={onClick}
          href="/services"
          color="inherit"
          className={styles.link}
        >
          Послуги
        </Link>
        <Link
          onClick={onClick}
          href="/contacts"
          color="inherit"
          className={styles.link}
        >
          Контакти
        </Link>
      </div>
    </motion.div>
  );
});

MenuMobile.displayName = "MenuMobile";

export default MenuMobile;

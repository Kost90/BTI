"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { listContent } from "./listdata";
import Checkbox from "../../../public/assets/svg/Checkbox.svg";
import { opacityVariants } from "@/constants/animation";
import styles from "./Herosection.module.css";


const Herosection = () => {

  return (
    <div className={styles.text_container}>
      <h1>
        <span style={{ textTransform: "uppercase", color: "#22C55E" }}>
        ГЕСТІЯ-БТІ
        </span>{" "}
        - ваш надійний партнер у сфері оформлення нерухомості.
      </h1>
      <ul className={styles.ul_container}>
        {listContent.map((el, i) => (
          <motion.li
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 1,
              delay: i * 0.5,
            }}
            viewport={{ amount: 0.2, once: true }}
            variants={opacityVariants}
            key={i}
          >
            <Image src={Checkbox} alt="checkbox" />
            <h6 className={styles.list_text}>{el}</h6>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Herosection;

'use client'
import Button from "@/components/button/Button";
import Link from "next/link";
import styles from './Propertyservice.module.css'
import { motion } from "framer-motion";
import { popUpVariant } from "@/constants/animation";

function ServicesDisplay({ services, onClick }: any) {
  return (
    <motion.div 
    initial={"initial"}
    whileInView={"visible"}
    transition={{ duration: 0.3 }}
    variants={popUpVariant}
    className={styles.display_container}>
      <h1>Послуга:</h1>
      <h2>{services.title}</h2>
      <h1>Необхідні документи:</h1>
      <ul>
        {services.documents.map((item: string, i:number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h1>Етапи виконання псоулги:</h1>
      <ul>
        {services.stages.map((item: string, i:number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h1>Орієнтовні строки виконання: <span>{services.time}</span></h1>
      <h1>Вартість: <span>від {services.price} y.e.</span></h1>
      <Button type={"button"}>
        <Link href="/contacts">ЗАЛИШИТИ ПОВІДОМЛЕННЯ</Link>
      </Button>
      <Button type={"button"}>
        <button type="button" onClick={onClick}>Обрати іншу послугу</button>
        </Button>
    </motion.div>
  );
}

export default ServicesDisplay;

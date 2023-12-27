'use client'
import SideSection from "./Sidesection";
import ContactForm from "../../components/forms/contactForm/ContactForm";
import styles from "./contacts.module.css";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useAppDispatch } from "@/lib/hooks";
import { addTheme } from "@/lib/features/theme/ThemeSlicer";

function Contacts() {
  const ref = useRef(null)
  const isInView = useInView(ref,{amount:0.5})
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(isInView){
      dispatch(addTheme('light'))
    }
  },[isInView])
  return (
    <div ref={ref}>
      <h4 className={styles.h4_hero}>ЗАЛИШИТИ ПОВІДОМЛЕННЯ</h4>
      <div className={styles.container_box}>
        <SideSection />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contacts;

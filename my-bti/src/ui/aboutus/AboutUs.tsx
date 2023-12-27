'use client'
import Image from "next/image";
import GreenFrame from "../../../public/assets/svg/greenelipsis.svg";
import BlueFrame from "../../../public/assets/svg/aboutus/frame_blue.svg";
import { aboutUs } from "@/constants/aboutUsData";
import AboutUsImg from "../../../public/assets/svg/AboutUsImg.png";
import styles from "./aboutus.module.css";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useAppDispatch } from "@/lib/hooks";
import { addTheme } from "@/lib/features/theme/ThemeSlicer";

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref,{amount:0.5})
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(isInView){
      dispatch(addTheme('light'))
    }
  },[isInView])

  return (
    <div ref={ref} className={styles.container_content}>
      <div className="relative">
        <Image src={GreenFrame} alt="svg_icon" className={styles.green_frame}/>
        <Image src={AboutUsImg} alt="image" className={styles.img} />
        <Image src={BlueFrame} alt="svg_icon"  className={styles.blue_frame}/>
      </div>

      <div className={styles.text_container}>
        <h4 className={styles.h4}>{aboutUs.title}</h4>
        <h5 className={styles.list_text}>
          {aboutUs.text}
        </h5>
        <h5 className={styles.list_text}>
          {aboutUs.aim}
        </h5>
      </div>
    </div>
  );
};

export default AboutUs;

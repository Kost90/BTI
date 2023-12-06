import Image from "next/image";
import GreenFrame from "../../../public/assets/svg/greenelipsis.svg";
import BlueFrame from "../../../public/assets/svg/aboutus/frame_blue.svg";
import { Box, Typography } from "@mui/material";
import { aboutUs } from "@/constants/aboutUsData";
import { listText, TextContainer } from "./stylesconstans";
import AboutUsImg from "../../../public/assets/svg/AboutUsImg.png";
import styles from "./aboutus.module.css";

const AboutUs = async () => {
  return (
    <div className={styles.container_content}>
      <div className="relative">
        <Image src={GreenFrame} alt="svg_icon" className={styles.green_frame}/>
        <Image src={AboutUsImg} alt="image" className={styles.img} />
        <Image src={BlueFrame} alt="svg_icon"  className={styles.blue_frame}/>
      </div>

      <Box sx={TextContainer}>
        <h4 className={styles.h4}>{aboutUs.title}</h4>
        <Typography variant="h5" sx={listText}>
          {aboutUs.text}
        </Typography>
        <Typography variant="h5" sx={listText}>
          {aboutUs.aim}
        </Typography>
      </Box>
    </div>
  );
};

export default AboutUs;

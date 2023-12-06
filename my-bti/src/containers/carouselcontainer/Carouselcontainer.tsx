import Image from "next/image";
import Greenelipsis from "../../../public/assets/svg/greenelipsis.svg";
import Orangevector from "../../../public/assets/svg/orangvector.svg";
import Dangervector from "../../../public/assets/svg/dangervector.svg";
import Purpleelipsis from "../../../public/assets/svg/purpleelipsis.svg";
import { Box } from "@mui/material";
import CarouselComponent from "../../components/carousel/Carousel";
import styles from "./Carouselsection.module.css";
import { mainbox, realtivebox } from "./styleconstans";

const Carouselsection = async () => {
  return (
    <Box sx={mainbox}>
      <Box sx={realtivebox}>
        <div className={styles.svg_container}>
          <Image
            src={Orangevector}
            alt="orange vector"
            className={styles.orange_vector}
          />
          <Image
            src={Greenelipsis}
            alt="svg elipsis"
            className={styles.green_elipsis}
          />
        </div>
        <CarouselComponent />
        <div className={styles.svg_container}>
          <Image
            src={Purpleelipsis}
            alt="purple elipsis"
            className={styles.purple_elipsis}
          />
          <Image
            src={Dangervector}
            alt="danger vector"
            className={styles.danger_vector}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Carouselsection;

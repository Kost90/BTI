import Image from "next/image";
import { Box, Container } from "@mui/material";
import Carouselsection from "@/containers/carouselcontainer/Carouselcontainer";
import Herosection from "@/ui/herosection/Herosection";
import CardList from "@/containers/cardslist/CardList";
import AboutUs from "@/ui/aboutus/AboutUs";
import WhyWe from "@/ui/whywe/WhyWe";
import Contacts from "@/ui/contacts/Contacts";
import "./globals.css";
import styles from "./homepage.module.css";
import ThemeContainer from "@/containers/themecontainer/ThemeContainer";
import waveSvg from "../../public/assets/svg/bg/waveherosec.svg";
import tiltWHywe from "../../public/assets/svg/bg/tiltwhysec.svg";
import LoopLine from "@/ui/loopline/LoopLine";

export default function Home() {
  return (
    <ThemeContainer>
      <Box sx={{ width: "100%" }}>
        <section className={styles.hero_section_bg}>
          <Container
            sx={{
              display: { xs: "block", md: "flex" },
              gap: "80px",
            }}
          >
            <Herosection />
            <Carouselsection />
            <Image src={waveSvg} alt="bg" className={styles.wave} />
          </Container>
        </section>
        <section className={styles.card_list_section}>
          <Container>
            <CardList />
          </Container>
          <LoopLine />
        </section>
        <section className={styles.aboutus_section}>
          <Container>
            <AboutUs />
            <Image src={tiltWHywe} alt="svg" className={styles.tilt} />
          </Container>
        </section>
        <section className={styles.why_we_section}>
          <Container>
            <WhyWe />
          </Container>
        </section>
        <section className={styles.contacts_section}>
          <Container>
            <Contacts />
          </Container>
        </section>
      </Box>
    </ThemeContainer>
  );
}

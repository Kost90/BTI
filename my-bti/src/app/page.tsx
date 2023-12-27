
import Carouselsection from "@/containers/carouselcontainer/Carouselcontainer";
import Herosection from "@/ui/herosection/Herosection";
import CardList from "@/containers/cardslist/CardList";
import AboutUs from "@/ui/aboutus/AboutUs";
import WhyWe from "@/ui/whywe/WhyWe";
import Contacts from "@/ui/contacts/Contacts";
import "./globals.css";
import styles from "./homepage.module.css";
import LoopLine from "@/ui/loopline/LoopLine";


export default function Home() {

  return (
      <div className="w-full">
        <section className={styles.hero_section_bg}>
          <div className={styles.box_container_hero_sec}>
            <Herosection />
            <Carouselsection />
          </div>
        </section>
        <section className={styles.card_list_section}>
          <div className={styles.box_container}>
            <CardList />
          </div>
          <LoopLine />
        </section>
        <section className={styles.aboutus_section}>
          <div className={styles.box_container}>
            <AboutUs />
          </div>
        </section>
        <section className={styles.why_we_section}>
            <WhyWe />
        </section>
        <section className={styles.contacts_section}>
          <div className={styles.box_container}>
            <Contacts />
          </div>
        </section>
      </div>
  );
}

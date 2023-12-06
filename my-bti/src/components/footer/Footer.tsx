import Image from "next/image";
import Facebook from "../../../public/assets/svg/socialmedia/Facebook.svg";
import Twitter from "../../../public/assets/svg/socialmedia/Twitter.svg";
import Instagram from "../../../public/assets/svg/socialmedia/Instagramm.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.footer_section}>
      <div className="container mx-auto">
        <div className={styles.flex_container}>
          <p>© 2023 MY-BTI. All rights reserved.</p>
          <div className={styles.icon_container}>
            <Image src={Facebook} alt="facebookIcon" />
            <Image src={Twitter} alt="TwitterIcon" />
            <Image src={Instagram} alt="InstagramIcon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import SideSection from "./Sidesection";
import ContactForm from "../../components/forms/contactForm/ContactForm";
import styles from "./contacts.module.css";

function Contacts() {
  return (
    <div>
      <h4 className={styles.h4_hero}>ЗАЛИШИТИ ПОВІДОМЛЕННЯ</h4>
      <div className={styles.container_box}>
        <SideSection />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contacts;

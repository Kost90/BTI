import SideSection from "./Sidesection";
import ContactForm from "../../components/forms/contactForm/ContactForm";
import styles from "./contacts.module.css";

function Contacts() {
  return (
    <div>
      <h1 className={styles.h1_hero}>НЕОБХІДНО ОФОРМИТИ ПРАВО ВЛАСНОСТІ</h1>
      <h1 className={styles.h1_hero}>ЗАЛИШ СВОЄ ПОВІДОМЛЕННЯ:</h1>
      <div className={styles.container_box}>
        <SideSection />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contacts;

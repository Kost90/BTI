import Link from "next/link";
import Button from "@/components/button/Button";
import styles from './modalwindow.module.css'

const ModalWindowPage = async () => {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Дякуємо за Вашу довіру нам!</h1>
      <h2>Наш інженер в найкоротший термін звяжеться з Вами</h2>
      <Button type={"button"}>
      <Link href={"/"} key={"головна"}>
        Повернутися на головну сторінку
      </Link>
      </Button>
    </div>
  );
};

export default ModalWindowPage;

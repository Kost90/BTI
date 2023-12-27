import Link from "next/link";
import Button from "../../button/Button";
import styles from '../Carousel.module.css'

interface PropsParams {
  name: string;
  description: string;
  path: string;
}

const Item = async ({ name, description, path }: PropsParams) => {
  return (
    <div className={styles.contentbox}>
      <h3 className={styles.hero_text}>
        {name}
      </h3>
      <p>
        {description}
      </p>
      <Button type={"button"}>
        <Link href={path} key={path}>Замовити</Link>
      </Button>
    </div>
  );
};

export default Item;

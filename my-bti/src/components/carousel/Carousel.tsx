"use client";
import Carousel from "react-material-ui-carousel";
import Item from "./item/Item";
import styles from "./Carousel.module.css";

const content = [
  {
    name: "Офрмлення нерухомості",
    description:
      "Скористайся послугою розрахунку вартості оформлення обєкту нерухомості та бронювання дати та часу зустрічі з юристом",
    path: "/services/property-services",
  },
  {
    name: "Замовити технічний паспорт",
    description:
      "Скористайся послугою розрахунку вартості технічного паспорту на обєкт нерухомості та бронювання дати та часу виїзда інженера",
    path: "/services/book-ingeneer",
  },
];



function CarouselComponent() {
  return (
    <Carousel
      className={styles.carousel}
      interval={5000}
      activeIndicatorIconButtonProps={{ style: { color: "#22C55E" } }}
      indicatorIconButtonProps={{ style: { color: "gray" } }}
    >
      {content.map((item, i) => (
        <Item
          key={i}
          name={item.name}
          description={item.description}
          path={item.path}
        />
      ))}
    </Carousel>
  );
}

export default CarouselComponent;

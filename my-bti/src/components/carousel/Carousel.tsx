"use client";
import Carousel from "react-material-ui-carousel";
import Item from "./item/Item";
import styles from "./Carousel.module.css";

const content = [
  {
    name: "Замовити послугу з офрмлення нерухомості",
    description:
      "Скористайся послугою розрахунку вартості оформлення обєкту нерухомості та бронювання дати та часу зустрічі з юристом",
    path: "/services/calcpropertyservices",
  },
  {
    name: "Замовити технічний паспорт на нерухомість",
    description:
      "Скористайся послугою розрахунку вартості технічного паспорту на обєкт нерухомості та бронювання дати та часу виїзда інженера",
    path: "/services/bookingeneer",
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

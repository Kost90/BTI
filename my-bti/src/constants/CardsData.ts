import TechnicalIcon from "../../public/assets/svg/TechnicalInvertIcon.svg";
import PropertyServIcon from "../../public/assets/svg/PropertyServIcon.svg";

export const cardContent = [
  {
    id: '1',
    title: "виготовлення технічного паспорту/звіту",
    services: [
      "- виготовлення технічного паспорту.",
      "- виготовлення технічної документації щодо поділу/обєднання обєкту.",
      "- технічне обстеження/технічний звіт.",
      "- перерахунок часток у домоволодінні."
    ],
    path: "services/book-ingeneer",
    src: TechnicalIcon,
  },
  {
    id: '2',
    title: "Оформлення права власності на нерухомості",
    services: [
      "- Введення в експлуатацію новобудови.",
      "- Реєстрація права власності.",
      "- Реконструкція обєкту.",
      "- Обєднання/поділ обєкту.",
      "- Зміна цільового призначення обєкту.",
    ],
    path: "services/property-services",
    src: PropertyServIcon,
  },
];

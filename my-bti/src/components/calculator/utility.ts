interface IParamscalculation {
  squar: number;
  type: string;
}

export const Calculation = (element: IParamscalculation) => {
  let sum = 0;

  switch (element.type) {
    case "квартира":
      if (element.squar <= 60) {
        sum = 1800;
      } else {
        sum = (element.squar - 60) * 10 + 1800;
      }
      break;
    case "будинок":
      if (element.squar <= 150) {
        sum = 2800;
      } else {
        sum = (element.squar - 150) * 13 + 2800;
      }
      break;
    case "приміщення":
      if (element.squar <= 300) {
        sum = 4000;
      } else {
        sum = (element.squar - 300) * 10 + 4000;
      }
      break;
  }
  return sum;
};

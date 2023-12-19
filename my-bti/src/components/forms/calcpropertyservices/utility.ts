import {
  newbuild,
  changetype,
  registration,
  divisionunion,
} from "./servicesData";
import { IObjectdata } from "./models";

interface IParamschecker {
  type: string;
}

export const TypeChecker = (element: IParamschecker) => {
  let result: IObjectdata = {
    title: "",
    time: "",
    documents: [],
    stages: [],
    price: 0,
  };

  switch (element.type) {
    case "newbuild":
      result = newbuild;
      break;
    case "registration":
      result = registration;
      break;
    case "divisionunion":
      result = divisionunion;
      break;
    case "changetype":
      result = changetype;
      break;
  }
  return result;
};

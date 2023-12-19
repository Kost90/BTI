export enum PropertyServicesEnum{
    newhouse = "newbuild",
    registration = "registration",
    divisionorunion = "divisionunion",
    changetypeofprop = "changetype",
}

export interface IInput{
    type:string,
}

export interface IObjectdata {
    title: string;
    documents: string[];
    stages: string[];
    price: number | string;
    time: string;
  }

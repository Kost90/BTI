export enum TypeDevelopEnum {
    flat = "квартира",
    house = "будинок",
    other = "приміщення",
  }
  
export interface IFormInput {
    name: string;
    adress: string;
    typeDevelop: TypeDevelopEnum;
    phone?: string;
    email: string;
    square: number;
  }
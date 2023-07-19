export interface Iproduct {
  imageSrc: string;
  alt: string;
  name: string;
  category: string;
  compaund: ICompaund;
  ingredients: string;
  price: number;
  onFocus: boolean;
  //id:number;
}

export interface ICompaund {
  calories: number;
  totalWeight: number;
  totalFat: number;
  totalCarbs: number;
  protein: number;
}

// export type Tproduct = {
//   imageSrc: string;
//   alt: string;
//   name: string;
//   calories: number;
//   totalWeight: number;
//   totalFat: number;
//   totalCarbs: number;
//   protein: number;
//   price: number;
// };

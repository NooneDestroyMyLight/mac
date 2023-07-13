export interface Iproduct {
  imageSrc: string;
  alt: string;
  name: string;
  category: string;
  calories: number;
  totalWeight: number;
  totalFat: number;
  totalCarbs: number;
  protein: number;
  price: number;
  ingredients: string;
  //id:number;
}

export interface ICompaund {
  calories: number;
  totalWeight: number;
  totalFat: number;
  totalCarbs: number;
  protein: number;
  price: number;
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

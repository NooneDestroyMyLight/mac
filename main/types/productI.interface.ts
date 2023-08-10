export interface Iproduct {
  imageSrc: string;
  alt: string;
  name: string;
  category: string;
  ingredients?: string;
  totalWeight: string;
  price: number;
  onFocus: boolean;
  //id:number;
}

// export interface ICompaund {
//   calories: number;
//   totalFat: number;
//   totalCarbs: number;
//   protein: number;
// }

export type TSizeRange = {
  size: string;
  price: number;
};
export interface IDrinks extends Iproduct {
  sizeRange: TSizeRange[];
}

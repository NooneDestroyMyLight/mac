export interface Iproduct {
  imageSrc: string;
  alt: string;
  name: string;
  category: string;
  compaund: ICompaund;
  ingredients?: string;
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

export type TSizeRange = {
  size: number;
  price: number;
};
export interface IDrinks extends Iproduct {
  sizeRange: TSizeRange[];
}

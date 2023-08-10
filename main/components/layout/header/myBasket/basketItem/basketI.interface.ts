import {
  IDrinks,
  Iproduct,
  TSizeRange,
} from "../../../../../types/productI.interface";

export interface IBasketItem extends Iproduct {
  //id
  count: number;
  subTotal: number;
}
export class CBasketItem implements IBasketItem {
  imageSrc: string;
  alt: string;
  name: string;
  category: string;
  price: number;
  ingredients?: string;
  onFocus: boolean;
  count: number = 1;
  subTotal: number;
  totalWeight: string;
  sizeRange?: TSizeRange[];
  constructor(productObj: Iproduct) {
    this.imageSrc = productObj.imageSrc;
    this.alt = productObj.alt;
    this.name = productObj.name;
    this.category = productObj.category;
    this.price = productObj.price;
    this.ingredients = productObj.ingredients;
    this.onFocus = productObj.onFocus;
    this.subTotal = this.price * this.count; //Change this one
    this.totalWeight = productObj.totalWeight;
    this.sizeRange = (productObj as IDrinks)?.sizeRange;
  }
}

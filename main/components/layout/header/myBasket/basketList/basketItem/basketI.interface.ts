import { Iproduct } from "../../../../../../types/productI.interface";
import { ICompaund } from "../../../../../../types/productI.interface";
import { IDrinks } from "../../../../../../types/productI.interface";
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
  compaund: ICompaund;
  price: number;
  ingredients?: string;
  onFocus: boolean;
  count: number = 1;
  subTotal: number;
  size: number;
  constructor(productObj: Iproduct | IDrinks) {
    this.imageSrc = productObj.imageSrc;
    this.alt = productObj.alt;
    this.name = productObj.name;
    this.category = productObj.category;
    this.compaund = productObj.compaund;
    this.price = productObj.price;
    this.ingredients = productObj.ingredients;
    this.onFocus = productObj.onFocus;
    this.subTotal = this.price * this.count; //Change this one
    this.size = (productObj as IDrinks).size;
  }
}

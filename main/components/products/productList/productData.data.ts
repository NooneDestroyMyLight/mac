import { Iproduct } from "../../../types/productI.interface";
import { IDrinks } from "../../../types/productI.interface";

export const categoryDRINKS = "DRINKS";

export const productData: (Iproduct | IDrinks)[] = [
  {
    imageSrc: "/images/Product/Item1.png",
    alt: "The Classic Burger",
    name: "The Classic Burger",
    category: "Burgers and rolls",
    totalWeight: "96g",

    price: 30,
    ingredients:
      "Beef steak with natural cowhide, cibula, a piece of marinated butter seasoned with gherkin and ketchup, on a wheat harrow bun.  ",
    onFocus: false,
  },
  {
    imageSrc: "/images/Product/Item2.png",
    alt: "Double Royal Cheeseburger",
    name: "Double Royal Cheeseburger",
    category: "Burgers and rolls",
    totalWeight: "249g",
    price: 109,
    ingredients:
      "Regular Bun 100%, Beef Patty, Ketchup, Pickle Slices, Onions, Mustard",
    onFocus: false,
  },

  {
    imageSrc: "/images/Product/Item4.png",
    alt: "McChicken Burger",
    name: "McChicken Burger",
    category: "Burgers and rolls",
    totalWeight: "175g",

    price: 107,
    ingredients: "",
    onFocus: false,
  },
  {
    imageSrc: "/images/Product/Item4.png",
    alt: "McChicken",
    name: "sdfsdf",
    category: "SNACKS",
    totalWeight: "175g",

    price: 107,
    ingredients: "",
    onFocus: false,
  },
  {
    imageSrc: "/images/Product/colaProduct-removebg-preview2.png",
    alt: "Coca-cola",
    name: "Coca-cola",
    category: categoryDRINKS,
    totalWeight: "",
    price: 35,
    ingredients: "All-worldly refreshing drink.",
    onFocus: false,
    sizeRange: [
      {
        size: "0.75",
        price: 45,
      },
      {
        size: "0.5",
        price: 40,
      },
      {
        size: "0.25",
        price: 30,
      },
      {
        size: "0.11",
        price: 22,
      },
      {
        size: "1",
        price: 54,
      },
    ],
  },
];

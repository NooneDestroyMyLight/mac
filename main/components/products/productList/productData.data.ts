import { Iproduct } from "../../../types/productI.interface";

export const productData: Iproduct[] = [
  {
    imageSrc: "/images/Product/Item1.png",
    alt: "The Classic Burger",
    name: "The Classic Burger",
    category: "Burgers and rolls",
    compaund: {
      calories: 250,
      totalWeight: 96,
      totalFat: 9,
      totalCarbs: 30,
      protein: 13,
    },
    price: 30,
    ingredients:
      "Beef steak with natural cowhide, cibula, a piece of marinated butter seasoned with gherkin and ketchup, on a wheat harrow bun. ",
    onFocus: false,
  },
  {
    imageSrc: "/images/Product/Item2.png",
    alt: "Double Royal Cheeseburger",
    name: "Double Royal Cheeseburger",
    category: "Burgers and rolls",
    compaund: {
      calories: 740,
      totalWeight: 249,
      totalFat: 42,
      totalCarbs: 43,
      protein: 48,
    },
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
    compaund: {
      calories: 464,
      totalWeight: 175,
      totalFat: 19,
      totalCarbs: 48,
      protein: 23,
    },
    price: 107,
    ingredients: "",
    onFocus: false,
  },
  {
    imageSrc: "/images/Product/Item4.png",
    alt: "McChicken",
    name: "sdfsdf",
    category: "SNACKS",
    compaund: {
      calories: 464,
      totalWeight: 175,
      totalFat: 19,
      totalCarbs: 48,
      protein: 23,
    },
    price: 107,
    ingredients: "",
    onFocus: false,
  },
  {
    imageSrc: "/images/Product/colaProduct-removebg-preview2.png",
    alt: "Coca-cola",
    name: "Coca-cola",
    category: "DRINKS",
    compaund: {
      calories: 163,
      totalWeight: 250,
      totalFat: 0,
      totalCarbs: 41,
      protein: 0,
    },
    price: 35,
    ingredients: "All-worldly refreshing drink.",
    onFocus: false,
  },
];

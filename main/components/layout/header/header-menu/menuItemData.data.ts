import { IMenuLink } from "./menuItem/menuItemI.interface";

export const menu: string = "Menu";

export const menuData: IMenuLink[] = [
  {
    name: menu,
    link: "/",
  },

  {
    name: "Delivery",
    link: "/delivery",
  },

  {
    name: "Mobile app",
    link: "/mobileAppInformation",
  },
];

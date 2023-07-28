export interface IUserAddressData {
  address: string;
}

export const userAddressData: IUserAddressData[] = [
  {
    address: "Пр.Поремоги, 75",
    //ADD LOCATION COORDINATE THERE
  },
  {
    address: "Гвардійців-Широнінців, 33",
  },
  {
    address: "Сумська, 125",
  },
  {
    address: "Наукова, 55",
  },
  {
    address: "Героїв праці, 63",
  },
  {
    address: "Студенська,123",
  },
  {
    address: "Пр.Поремоги, 75",
  },
  {
    address: "Гвардійців-Широнінців, 33",
  },
  {
    address: "Сумська, 125",
  },
  {
    address: "Наукова, 55",
  },
  {
    address: "Героїв праці, 63",
  },
  {
    address: "Студенська,123",
  },
];

export const userAdressKey: keyof IUserAddressData = "address";

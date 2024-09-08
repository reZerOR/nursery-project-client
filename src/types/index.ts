export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type TPlantData = {
  title: string;
  description: string;
  rating: number;
  imageUrl: string;
  price: number;
  quantity: number;
  category: string;
};
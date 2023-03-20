type IGoodsList = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  images: string[];
}[];

type IGood = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  images: string[];
};

export { IGoodsList, IGood };

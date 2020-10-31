import * as Yup from 'yup';

export type Product = {
  id: string;
  title: string;
  studio: string;
  platforms: string[];
  genre: string;
  description: string;
  release_date: string;
  poster: string;
  price: number;
  count: number;
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});

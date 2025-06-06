export type ProjectColumnType = {
  _id: string;
  name: string;
  description: string;
  products: string[];
};

export type ProductColumnType = {
  _id: string;
  name: string;
  description: string;
  code: string;
  image: string | undefined;
};

export type ProductOptionType = {
  _id: string;
  name: string;
};

export type ProjectDataSourceType = {
  _id: string;
  name: string;
  description: string;
  products: ProductColumnType[];
};
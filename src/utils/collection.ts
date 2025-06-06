import { apiWithToken } from '../utils/service';
import { apiBaseUrl } from '../utils/constants';
import { ProductColumnType, ProjectColumnType } from '../types/grid';

const mapProductsToProjects = (
  projects: ProjectColumnType[],
  products: ProductColumnType[]
) => {
  return projects
    .map((project) => {
      return {
        ...project,
        products: project.products.map((product) => {
          const foundProduct = products.find(
            (p) => p._id === (product as string)
          );

          return foundProduct ? { ...foundProduct } : ({} as ProductColumnType);
        }),
      };
    })
    .filter((project) => project.products.length > 0);
};

const getData = async () => {
  const urls = [`${apiBaseUrl}/projects`, `${apiBaseUrl}/products`];
  const results = await Promise.all(urls.map((url) => apiWithToken().get(url)));

  const projects = results[0].data;
  const products = results[1].data;

  const mapping = mapProductsToProjects(projects, products);
  return mapping;
};

export { getData };

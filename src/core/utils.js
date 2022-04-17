export const getAllCategoriesFromProducts = products => {
  const categoriesList = products.map(el => el.category);
  const result = Array.from(new Set(categoriesList));
  return result;
};

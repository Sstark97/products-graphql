import {
  getProduct,
  getProducts,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./product.resolver.js";

import {
  addCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "./category.resolver.js";

const resolvers = {
  Query: {
    // Category
    category: getCategory,
    allCategories: getCategories,
    // Products
    product: getProduct,
    allProducts: getProducts,
    productsByCategory: getProductsByCategory
  },
  Mutation: {
    // Product
    addProduct,
    updateProduct,
    deleteProduct,

    // Category
    addCategory,
    updateCategory,
    deleteCategory,
  },
};

export { resolvers };

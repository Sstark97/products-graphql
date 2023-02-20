import { getProduct, getProducts, addProduct, updateProduct, deleteProduct } from "./product.resolver.js"
import { addCategory, getCategories, getCategory } from "./category.resolver.js";

const resolvers = {
  Query: {
    hello: () => "hola mundo",
    getPerson: (_, args) => `Hola, mi nombre es ${args.name} y tengo ${args.age} años!`,
    getInt: () => 3000,
    getFloat: () => 3000.2,
    getString: () => "3000",
    getBoolean: () => true,
    getID: () => "121212",
    getNumbers: (_, args) => args.numbers,
    // Category
    category: getCategory,
    // Products
    product: getProduct,
    allProducts: getProducts,
    allCategories: getCategories
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory
  }
};

export {
    resolvers
}
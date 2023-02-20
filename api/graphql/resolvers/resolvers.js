import { getProduct, getProducts } from "./product.resolvers.js"

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
    // Products
    product: getProduct,
    allProducts: getProducts
  },
};

export {
    resolvers
}
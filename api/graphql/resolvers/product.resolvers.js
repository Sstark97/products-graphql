const getProduct = (_, { id }) => {
    return {
       id,
       name: "Producto 1",
       price: 3000.2,
       description: "bla bla bla",
       image: "http://image.png",
       createdAt: new Date().toISOString()
   }
}

const getProducts = () => {
   return []
}

const addProduct = () => {
   // codigo
}

export { 
    getProduct, 
    getProducts 
}
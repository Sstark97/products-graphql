const getProduct = (_, { id }) => {
  return {
    id,
    name: "Producto 1",
    price: 3000.2,
    description: "bla bla bla",
    image: "http://image.png",
    createdAt: new Date().toISOString(),
  };
};

const getProducts = () => {
  return [
   {
      id: 1,
      name: "Producto 1",
      price: 3000.2,
      description: "bla bla bla",
      image: "http://image.png",
      createdAt: new Date().toISOString(),
   },
   {
      id: 2,
      name: "Producto 2",
      price: 3000.2,
      description: "bla bla bla",
      image: "http://image.png",
      createdAt: new Date().toISOString(),
   },
   {
      id: 3,
      name: "Producto 3",
      price: 3000.2,
      description: "bla bla bla",
      image: "http://image.png",
      createdAt: new Date().toISOString(),
   },
   {
      id: 4,
      name: "Producto 4",
      price: 3000.2,
      description: "bla bla bla",
      image: "http://image.png",
      createdAt: new Date().toISOString(),
   }
  ];
};

const addProduct = () => {
  // codigo
};

export { getProduct, getProducts };

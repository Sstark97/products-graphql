import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getProduct = async (_, { id }) => {
   const product = await prisma.product.findUnique({
      include: {
         category: true
      },
      where: {
         id: parseInt(id)
      }
   })

   return product
};

const getProducts = async () => {
   const products = await prisma.product.findMany()

   return products
};

const addProduct = async (_, { input }) => {

  const product = await prisma.product.create({
   data: {
      ...input
   },
  })

  return product
};

const updateProduct = (_, { input, id }) => {
   // codigo
};

 const deleteProduct = (_, { id }) => {
   // codigo
};

export { getProduct, getProducts, addProduct, updateProduct, deleteProduct};
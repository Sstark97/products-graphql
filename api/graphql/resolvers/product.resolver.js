import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getProduct = async (_, { id }) => {
   const product = await prisma.product.findUnique({
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

const getProductsByCategory = async (_, { categoryId }) => {
   const products = await prisma.product.findMany({ 
      where: {
         categoryId: categoryId ? parseInt(categoryId) : undefined
      }
   })

   return products
}

const addProduct = async (_, { input }) => {

  const product = await prisma.product.create({
   data: {
      ...input
   },
  })

  return product
};

const updateProduct = async (_, { input, id }) => {
   const product = await prisma.product.update({
      where: {
         id: parseInt(id)
      },
      data: {
         ...input
      }
   })

   return product
};

 const deleteProduct = async (_, { id }) => {
   const product = await prisma.product.delete({
      where: {
         id: parseInt(id)
      },
   })

   return product.id
};

export { getProduct, getProducts, getProductsByCategory, addProduct, updateProduct, deleteProduct};

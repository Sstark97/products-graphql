import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getCategory = async (_, { id }) => {
    const category = await prisma.category.findUnique({
        where: {
           id: parseInt(id)
        }
     })
  
     return category
};

const getCategories = async () => {
   const categories = await prisma.category.findMany()

   return categories
};

const addCategory = async (_, { input }) => {
  const category = await prisma.category.create({
   data: {
      ...input
   }
  })

  return category
};

const updateCategory = (_, { input, id }) => {
   // codigo
};

 const deleteCategory = (_, { id }) => {
   // codigo
};

export { getCategories, getCategory, addCategory};

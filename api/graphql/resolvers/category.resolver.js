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

const updateCategory = async (_, { id, input}) => {
   const category = await prisma.category.update({
      where: {
         id: parseInt(id)
      },
      data: {
         ...input
      }
   })

   return category
};

 const deleteCategory = async (_, { id }) => {
   const category = await prisma.category.delete({
      where: {
         id: parseInt(id)
      },
   })

   return category.id
};

export { getCategories, getCategory, addCategory, updateCategory, deleteCategory};

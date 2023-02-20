import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getCategory = (_, { id }) => {

};

const getCategories = () => {
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

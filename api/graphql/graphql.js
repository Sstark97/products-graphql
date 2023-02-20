import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground'
import { expressMiddleware  } from '@apollo/server/express4'
import { loadFiles } from "@graphql-tools/load-files"

const resolvers = {
    Query: {
      hello: () => "hola mundo",
      getPerson: (_, args) => `Hola, mi nombre es ${args.name} y tengo ${args.age} años!`,
      getInt: () => 3000,
      getFloat: () => 3000.2,
      getString: () => "3000",
      getBoolean: () => true,
      getID: () => "121212",
      getProduct: () => {
        return {
          id: "12345",
          name: "Producto 1",
          price: 3000.2,
          description: "bla bla bla",
          image: "http://image.png",
          createdAt: new Date().toISOString()
        }
      }
    },
};

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles("./api/**/*.graphql"),
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });

  await server.start();

  app.use(expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }));
}

export {
    useGraphql
}
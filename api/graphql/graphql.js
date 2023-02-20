import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";
import { expressMiddleware } from "@apollo/server/express4";
import { loadFiles } from "@graphql-tools/load-files";
import { resolvers } from "./resolvers/resolvers.js";

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles("./api/**/*.graphql"),
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();

  app.use(
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );
};

export { useGraphql };

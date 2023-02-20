import express from 'express';
import cors from "cors"
import { useGraphql } from './graphql/graphql.js';

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors({
    origin: '*'
  }))

  app.get('/', (req, res) => {
    res.send('API Products GraphQL');
  });

  await useGraphql(app);

  return app;
}

export {
    createApp
}
import express from 'express';
import { useGraphql } from './graphql/graphql.js';

const createApp = async () => {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hola mi server en express');
  });

  app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
  });

  await useGraphql(app);

  return app;
}

export {
    createApp
}
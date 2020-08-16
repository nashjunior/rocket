import express from 'express';
import 'reflect-metadata';
import cors from 'cors';
import routes from './routes/index';
import './database';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Started on port 3333');
});

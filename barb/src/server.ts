import express from 'express';
import 'reflect-metadata';
import cors from 'cors';
import routes from './routes/index';
import './database';
import uploadConfig from './config/upload';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Started on port 3333');
});

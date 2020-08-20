import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';
import routes from './routes/index';
import './database';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response
    .status(500)
    .json({ status: 'errpr', message: 'Internal Server Error' });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Started on port 3333');
});

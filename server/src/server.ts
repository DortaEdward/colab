import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import apiRouter from './api';

import { notFound, errorHandler } from './middleware';
import { validateToken } from './utils/jwt';
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan('common'));

app.use(validateToken);


app.get('/', (req, res, next) => {
  res.json({
    status: 200,
    message: 'Api working',
  });
});

app.use('/api/v1', apiRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})
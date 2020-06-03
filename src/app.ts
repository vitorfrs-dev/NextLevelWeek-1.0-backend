import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.use(routes);

export default app;
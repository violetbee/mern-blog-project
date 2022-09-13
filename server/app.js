import express from 'express';
import UserRouter from './Routers/userRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', UserRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('connected db'))
    .catch((err) => console.log(err));
});

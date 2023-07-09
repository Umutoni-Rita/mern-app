import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
    "mongodb+srv://umurita37:M0ng0db@mern-app.kuewkpg.mongodb.net/mern-app?retryWrites=true&w=majority"
);

app.listen(3001, () => {
    console.log("App listening on http://localhost:3001");
});


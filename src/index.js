import express from "express";
import userRouter from './routes/user-route.js';
const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(3000, () => {
    console.log("Server running at port", 3000)
})
import express from "express";
import userRouter from './routes/user-route.js';
import schedulingRouter from './routes/agendamento-route.js';
import animalRouter from './routes/animal-route.js';
import "dotenv/config";
const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/agendamento', schedulingRouter);
app.use('/animal', animalRouter);

app.listen(port, () => {
    console.log("Server running at port", port)
});
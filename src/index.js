import express from "express";
import userRouter from './routes/user-route.js';
import schedulingRouter from './routes/agendamento-route.js';
import animalRouter from './routes/animal-route.js';
const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/agendamento', schedulingRouter);
app.use('/animal', animalRouter);

app.listen(3000, () => {
    console.log("Server running at port", 3000)
})
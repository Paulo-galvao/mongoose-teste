import User from "../models/users.js";

async function store(req, res) {
    try {
        const content = await User.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json(content);
        res.send(error.message);
        console.log(error.message);
    }
} 

async function show(req, res) {
    try {
        const content = await User.find(req.body).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(content);
        res.send(error.message);
        console.log(error.message);
    }
} 

export default {store, show};
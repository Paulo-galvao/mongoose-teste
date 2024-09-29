import Animal from "../models/animal-model.js";

async function store(req, res) {
    try {
        const content = await Animal.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function show(req, res) {
    try {
        const content = await Animal.find().exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function showById(req, res) {
    try {
        const content = await Animal.findById(req.params.id).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function update(req, res) {
    try {
        const content = await Animal.findByIdAndUpdate(req.params.id, req.body).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function destroy(req, res) {
    try {
        const content = await Animal.findByIdAndDelete(req.params.id).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export default {store, show, showById, update, destroy};
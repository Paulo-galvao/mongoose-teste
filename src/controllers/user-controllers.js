import User from "../models/user-model.js";
import jwt from "jsonwebtoken";

async function store(req, res) {
    try {
        const content = await User.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error.message);
    }
} 

async function show(req, res) {
    try {
        const content = await User.find().exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error.message);
    }
} 

async function showById(req, res) {
    try {
        const content = await User.findById(req.params.id).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error.message);
    }
}

async function update(req, res) {
    try {
        const content = await User.findByIdAndUpdate(req.params.id, req.body).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error.message);
    }
}

async function destroy(req, res) {
    try {
        const content = await User.findByIdAndDelete(req.params.id).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error.message);
    }
}

async function signup(req, res) {
    try {
      const user = await User.create({
        email: req.body.email,
        senha: req.body.senha,
      });
  
      const token = jwtService.generateAccessToken({
        permissao: user.permissao,
        email: user.email,
        _id: user._id,
      });
  
      // Devolve o token de acesso
      res.status(201).json({
        token,
      });
  
    } catch (error) {
      console.log(error.message)
      res.status(400).send(error.message);
    }
};

async function login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      }).exec();
  
      //validando se existe o usuário cadastrado
      if (user && (await user.senhaCorreta(req.body.senha))) {
        const token = jwtService.generateAccessToken({
          permissao: user.permissao,
          email: user.email,
          _id: user._id,
        });
  
        // Devolve o token de acesso
        res.json({
          token,
        });
      } else {
  
        res.status(404).json("Email ou senha inválidos");
      }
  
    } catch (error) {
      console.log(error.message)
      res.status(400).send(error.message);
    }
  };


export default {store, show, showById, update, destroy, signup, login};
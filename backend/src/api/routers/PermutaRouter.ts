import express from "express";
import { createPermuta, getAllPermutas } from "../controllers/PermutaContoller.ts";

const PermutaRouter = express.Router();

// Lista permutas
PermutaRouter.get("/permutas", getAllPermutas);
PermutaRouter.get("/:data",(req,res)=>{
    res.send("Listar todas as Permutas em determinada data");
})
PermutaRouter.get("/user/:id",(req,res)=>{
    res.send("Listar todas as Permutas do usuario");
})

//Criar solicitação de permuta 
PermutaRouter.post("/permuta",createPermuta);

//Atualizar Permuta
PermutaRouter.put("/:id",(req,res)=>{
    res.send("Atualizar a Permuta");
})

//Deletar a Permuta
PermutaRouter.delete("/:id",(req,res)=>{
    res.send("Deletar a Permuta");
})


export default PermutaRouter;
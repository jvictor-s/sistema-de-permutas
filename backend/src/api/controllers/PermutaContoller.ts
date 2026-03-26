import type { Request, Response } from "express";
import Permuta from "../../models/PermutaModel.ts";

export async function createPermuta(req:Request,res:Response) {
    try{
        const permuta = await Permuta.create(req.body);
        res.status(201).json(permuta);
    }catch (error){
        console.log(error)
        res.status(400).json(
            {mensage: "Erro ao criar Permuta",
             error:error   
            }
        );
    }
};

export async function getAllPermutas (req:Request,res:Response){
    try{
        const permutas = await Permuta.findAll();
        res.status(200).json(permutas);
    }catch(error){
        res.status(500).json({message:"Erro ao buscar as Permutas", error })
    }
}

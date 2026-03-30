import express from "express";
import PermutaRouter from "./src/api/routers/PermutaRouter.ts";
import dotenv from "dotenv";

dotenv.config();
const server = express();
const port = process.env.PORT;

server.use(express.json());

server.use("/",PermutaRouter);

server.listen(port,()=>{
    console.log("Server is running!✅");
})
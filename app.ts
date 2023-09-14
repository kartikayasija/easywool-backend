import express,{ Application,Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app:Application = express();

app.get('/',(req:Request, res:Response)=>{
  res.status(200).json({message:"Server Running"});
})

const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>console.log(`server started at ${PORT}`));


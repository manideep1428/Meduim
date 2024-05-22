import express from  'express';
import jwt from 'jsonwebtoken';
import {PrismaClient} from "@prisma/client";

require('dotenv').config()

const router = express.Router();
const prisma = new PrismaClient();


router.post("/v1/signin", async (req,res)=>{
    // ...
    const {email ,password} = req.body;
    const user = await prisma.user.findUnique({
        where : {
            email : email
        }
    });
    if(!user){
        res.status(404).json({
            message : "user not found",
        });
    }
    
    if(user?.password !== password){
        res.status(404).json({
            message : "password is not correct",
        })
    }
    res.cookie("token",user?.id,{
        httpOnly : true,
        secure : true   
    })
    const token = jwt.sign({id : user?.id} , process.env.JWT_SECRET || "nothing")
    res.send({message : "login success" , token : token})
})              


//SignUp route
router.post("/v1/signup", async (req,res)=>{
     const {name ,password , email}= req.body    
     try{
    const user  = await prisma.user.create({
        data : {
            name,
            email,
            password
        }
    })
    const token = jwt.sign({id : user.id},process.env.JWT_SECRET || "nothing")
    res.cookie("token",token)
    console.log(token);
    return res.send({message : "user created" , token :token})
   }catch(e){
    console.log(e)
    return res.send({message: "User Not Created" , err : e})
   }
})

export {  router as userRouter }
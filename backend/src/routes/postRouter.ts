import { PrismaClient } from "@prisma/client";
import express from "express"
import jwt, { verify } from "jsonwebtoken"

const router = express.Router();
const prisma  = new PrismaClient();

// router.use("/",async (req,res)=>{
//     const {authorization} = req.headers
//     const verifyUser = jwt.sign(String(authorization) , process.env.JWT_SECRET || "nothing")
// })



router.post("/post", async(req, res) => {
   try {
    const {authorization} = req.headers
    const verifyAuthor = jwt.verify( String( authorization) , process.env.JWT_SECRET || "nothing")
    const {title , content } = req.body
    const post = await prisma.post.create({
        data: {
            title: title,
            content: content,
             //@ts-ignore
            authorId: verifyAuthor.id
        }
    })
     return res.json({post : post , message : "Post created successfully"})
   } catch (error) {
     console.error
     console.log(error)
     return res.status(500).json({message : "Internal server error" , error : error})
   }
})

//updating post 
 
router.put("/post/:id", async(req, res) => {
    try {
        const {title , content } = req.body
        const {id}  =  req.params
        const token  = req.headers.authorization || ""
        if(!token){
            return res.status(401).json({message : "Unauthorized Request"})
        }
        const post = await prisma.post.update({
            where: {
                id: Number(id)
            },
            data: {
                title: title,
                content: content,
            } 
        })
        return res.json({post : post , message : "Post updated successfully"})
    }
   catch(err){
    console.log(err)
    }
});

//deleting post
router.delete("/post/:id", async(req, res) => {
    try {
        const {id}  = req.params
        const token  = req.headers.authorization || ""
        if(!token){
            return res.status(401).json({message : "Unauthorized Request"})
        }
        const post = await prisma.post.delete({
            where: {
                id: Number(id)
        }   
        })
        return res.json({post : post , message : "Post deleted successfully"})
    }
    catch(e){
        console.log(e)
        return res.json({message : "Internal server error" , error : e})
    }  
})

router.get("/posts",async (req,res)=>{
   try {
    const post  = await prisma.post.findMany({
        select:{
            createdAt:true,
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
            }
    })
    console.log(post)
    return res.send(post)
   } catch (error) {
    console.log(error)
     res.send(error);
   }
})



export {router as postRouter}
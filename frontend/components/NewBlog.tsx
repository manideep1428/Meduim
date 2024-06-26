'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { BlogInputCheck } from "@/app/utils/types";

export default function NewBlog(){
    const [loading,setLoading] = useState(false);
    const [blogData,setBlogData] = useState({title : "" ,content : ""})
    
    const handleNewpost = async ()=>{
        setLoading(true);
      try {
        const ok = BlogInputCheck.safeParse(blogData);
        if(ok.success){
            let response = await axios.post("http://localhost:8080/v1/post/" ,{ 
            headers: {
                'Authorization' :localStorage.getItem("token"),
            }
        })
          console.log(response)
        }
      } catch (error) {
         console.log(error)
      }
    }
    return(
        <div className="w-4/5 h-full flex flex-col gap-6">
         <Input
         placeholder="Title of Your Blog"
         onChange={(e)=>setBlogData({...blogData,title : e.target.value})}
         />   
         <Textarea
         rows={16}
         onChange={(e)=>setBlogData({...blogData,content : e.target.value})}
         placeholder="Description........."/>
        <div className="flex justify-end items-end">
         <Button 
         onClick={handleNewpost}
         className="w-20">
        {loading ? "Wait": "Post"}
        </Button>
        </div>
        </div>
        
    )
}
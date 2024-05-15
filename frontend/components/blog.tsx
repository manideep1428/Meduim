'use client'
import React from "react";
import { useBlogs } from "@/app/hooks/useBlog";

interface Blog {
    title :string;
    content :string;
    id:string;
}

export default function  Blog() {
    const { blogs , loading } = useBlogs();
        if(!loading){
         return(
            <div> Loading  </div>
         )
        }
        return(
        <div>
          {blogs.map((blog:Blog)=>(
            <div key={blog.id}>
              
            </div>
          ))}
        </div>
    )
    
}
'use client'
import React from "react";
import { useBlogs } from "@/app/hooks/useBlog";
import BlogCard from "./blogCard";

interface Blog {
    title :string;
    content :string;
    id:string;
}

export default function Blog() {
    const { blogs , loading } = useBlogs();
        if(!loading){
         return(
            <div className="flex w-full h-full"> Loading...  </div>
         )
        }
        return(
         <div className="flex flex-col w-[3/4] h-full"> 
         { Object.values(blogs).map((blog:any) => (
            <div key={blog.id}>
            <BlogCard imageUrl="none" date={blog.createdAt} title={blog.title} content={blog.content} id={blog.id} name={blog.author?.name} />  
            </div>
          ))
        }
        </div> 
    )
}
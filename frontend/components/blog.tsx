import React from "react";
import { useBlogs } from "@/app/hooks/useBlog";
import BlogCard from "./blogCard";
import { useRouter } from "next/navigation";

export default function Blogs() {
    const { blogs , loading } = useBlogs();
    const router  = useRouter();
    const handleEachBlog = (id:string)=>{
        router.push(`blog/${id}`)
    }
       
    if (!loading) {
        return(
              <div className="flex justify-center items-center h-full">
            <div className="text-2xl font-bold">Loading...</div>
        </div>
        )
    }
        return(
         <div className="flex flex-col w-[3/4] h-full"> 
         { blogs?.map((blog:any) => (
            <div key={blog.id} onClick={()=>handleEachBlog(blog.id)} className="hover:cursor-pointer">
            <BlogCard 
            imageUrl="none" 
            date={blog.createdAt} 
            title={blog.title} 
            content={blog.content}
            id={blog.id}
            name={blog.author?.name}
             />  
            </div>
          ))
        }
        </div> 
    )
}
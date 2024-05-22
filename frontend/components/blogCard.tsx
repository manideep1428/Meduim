import React from "react";
import AvatarSvg from "./AvatarBlog";
import { Dots } from "./Svgs/TopDots";

interface BlogProps{
  title: string;
  content : string;
  imageUrl: string; 
  name :string;
  id:string;
  date:string;
}
export default  function BlogCard({ id ,title, content , imageUrl, name ,date}: BlogProps) {
    return(
        <div className="h-40 border-b-2 border-gray-300">
         <div className="flex justify-start items-start m-4 relative">
          <AvatarSvg imageUrl={imageUrl} name={name}/>
          <p className="text-center m-3 hover:cursor-pointer">{date}</p>
          <div className="absolute flex justify-end items-end right-0 top-0 hover:cursor-pointer">
           <Dots/> 
          </div> 
         </div>
          <div className="flex flex-col font-serif m-4 ml-8">
            <h1 className="text-xl font-extrabold font-serif max-w-[4/5]">{title}</h1>
            <p className="font-light font-serif">{content.slice(0,40)}...</p>
          </div>
        </div>
    )
}
import React from "react";
import AvatarSvg from "./AvatarBlog";
import { Dots } from "./Svgs/TopDots";

interface BlogProps{
  title: string;
  content : string;
  imageUrl: string; 
  name :string;
  authorId :string;
}
export default  function BlogCard({ title, content , imageUrl, name, authorId }: BlogProps) {
    return(
        <div className="w-4/6 h-40  shadow-black shadow-md">
         <div className="flex justify-start items-start m-4 relative">
          <AvatarSvg imageUrl={imageUrl} name={name}/>
          <p className="text-center m-3 hover:cursor-pointer">{Date.now().toString()}</p>
          <div className="absolute flex justify-end items-end right-0 top-0 hover:cursor-pointer">
           <Dots/> 
          </div> 
         </div>
          <div className="flex flex-col font-serif m-4 ml-8">
            <h1 className="text-xl">{title}</h1>
            <p>{content.slice(0,40)}...</p>
          </div>
        </div>
    )
}
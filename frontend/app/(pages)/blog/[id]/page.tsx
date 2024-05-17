'use client'
import { useEachBlogs } from "@/app/hooks/useBlog"
import AvatarSvg from "@/components/AvatarBlog";
import { useParams } from "next/navigation";


export default  function Blog(){
    const params = useParams();
    const id = params.id;
    console.log(id)
    const { blog , loading } :{blog:any ,loading:boolean} = useEachBlogs(id);
    if(loading){
        return<div>Loading...</div>
    }
    return(
        <div className="flex">
           {/*   //avatar      */}
         <div>
            <AvatarSvg imageUrl={""} name={"AN"}/>
         </div>
         <div>
          <h2 className="text-4xl font-bold dark:text-white"></h2>
          <p className="text-2xl dark:text-white"></p>
         </div>
        </div>
    )
}
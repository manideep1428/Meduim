'use client'

import NewBlog from "@/components/NewBlog";
import UpdateBlog from "@/components/Updateblog";

export default function CreateNewBlog() {
    return(
        <div className="flex flex-col justify-center items-center gap-5 p-5">
            <h1>Update Blog</h1>
            <UpdateBlog/>
        </div>
    )
} 
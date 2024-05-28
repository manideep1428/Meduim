'use client'
import { useEachBlogs } from "@/app/hooks/useBlog"
import AvatarSvg from "@/components/AvatarBlog";
import { Button } from "@/components/ui/button";
import { useParams , useRouter } from "next/navigation";

export default function Blog() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    const { blog, loading } = useEachBlogs(Number(id));
    localStorage.setItem("blog", JSON.stringify(blog));
    console.log(blog);
    const handleUpdate = () => {
        router.push(`/blog/${id}/update`);
    }

    if (loading) {
        return(
              <div className="flex justify-center items-center h-screen">
            <div className="text-2xl font-bold">Loading...</div>
        </div>
        )
    }

    return (
        <div className="w-full flex justify-center items-center  dark:bg-gray-900 p-6 md:p-12">
            <div className="w-full max-w-[80%] flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="flex justify-center items-center p-6 md:p-12">
                    <AvatarSvg imageUrl={""} name={"mani"} />
                </div>
                <div className="w-full md:w-3/4 p-6 md:p-12 flex flex-col justify-center items-start">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {blog?.title}
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
                        {blog?.content}
                    </p>
                </div>
                <Button 
                onClick={handleUpdate}>{"Update"}</Button>
            </div>
        </div>
    )
}

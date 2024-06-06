'use client'
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { BlogInputCheck } from "@/app/utils/types";
import { useParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

interface blogProps {
    title: string;
    content: string;
    id: string;
    updatedAt: string;
    createdAt: string;
    authorId: string;
}

export default function UpdateBlog() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const [loading, setLoading] = useState(false);
    const [blogData, setBlogData] = useState({ title: '', content: '' });

    useEffect(() => {
       if(typeof window !== 'undefined') {
        const blog = localStorage.getItem("blog");
            if (blog) {
                const parsedBlog = JSON.parse(blog);
                setBlogData({ title: parsedBlog.title, content: parsedBlog.content });
            }
        } 
    }, []);

    const handleNewPost = async () => {
        setLoading(true);
        try {
            const ok = BlogInputCheck.safeParse(blogData);
            if (ok.success) {
              console.log("req wnet")
              let response =  await axios.put(`http://localhost:8080/api/v1/post/${id}`, blogData, {
                    headers: {
                        'Authorization': localStorage.getItem("token"),
                    }
                });
                console.log(response.data.message)
               if(response.data) {
                toast.success(response.data.message)
                 router.push("/blog/"+id)
               }
            }
             else if(ok.error) throw Error(ok.error.issues[0].message)
        } catch (error:any) {
            console.log(error);
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-4/5 h-full flex flex-col gap-6">
            <Input
                placeholder="Title of Your Blog"
                onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
                value={blogData.title}
            />
            <Textarea
                rows={16}
                onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}
                placeholder="Description........."
                value={blogData.content}
            />
            <div className="flex justify-end items-end">
                <Button 
                    onClick={handleNewPost}
                    className="w-20"
                    disabled={loading}
                >
                    {loading ? "Wait" : "Update"}
                </Button>
                <ToastContainer/>
            </div>
        </div>
    );
}

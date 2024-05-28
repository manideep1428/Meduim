import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { BlogInputCheck } from "@/app/utils/Index";
import { useParams, useRouter } from "next/navigation";

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
        const blog = localStorage.getItem("blog");
        if (blog) {
            const parsedBlog = JSON.parse(blog);
            setBlogData({ title: parsedBlog.title, content: parsedBlog.content });
        }
    }, []);

    const handleNewPost = async () => {
        setLoading(true);
        console.log("req wnet")
        try {
            const ok = BlogInputCheck.safeParse(blogData);
            if (ok.success) {
              let response =  await axios.put(`http://localhost:8080/api/v1/post/${id}`, blogData, {
                    headers: {
                        'Authorization': localStorage.getItem("token"),
                    }
                });
               console.log(response.data)
            }
        } catch (error) {
            console.log(error);
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
            </div>
        </div>
    );
}

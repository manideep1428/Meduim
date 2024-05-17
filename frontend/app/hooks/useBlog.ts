import axios from 'axios';
import { useEffect , useState} from "react";

interface Blogs{
  title :string;
  content :string
  id:string
  authorId:{
    author :string
  }
}

interface Blog{
  title :string;
  content :string
  id:string
  authorId:{
    author :string
  }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<Blogs[]>([]);
  
    useEffect(() => {
      axios.get(`http://localhost:8080/v1/posts`).then((response) => {
        setLoading(true);
        setBlogs(response.data.blog);
      }).catch((error) => {
        console.error("Error fetching blogs:", error);
      });
    }, [blogs]);
  
    return(
      {loading,
      blogs}
    )    
  };
  

  export const useEachBlogs = ({id}:any) => {
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState<Blog>();
  
    useEffect( () => {
       axios.get(`http://localhost:8080/blog/${id}`)
       .then((response) => {
        setLoading(true);
        setBlog(response.data.blog);
      }).catch((error) => {
        console.error("Error fetching blogs:", error);
      });
    }, [id]);
    return(
      { blog  , loading}
    )    
  };
  

  
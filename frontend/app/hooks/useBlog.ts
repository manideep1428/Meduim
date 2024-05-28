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
  authorId:string
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState("");
  
    useEffect(() => {
      axios.get(`http://localhost:8080/api/v1/posts`).then((response) => {
      setLoading(true)
      setBlogs(response.data);
      }).catch((error) => {
        console.error("Error fetching blogs:", error);
      });
    }, []);
  
    return(
      {loading,
      blogs}
    )    
  };
  

  export const useEachBlogs = (id:Number) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
  
    useEffect( () => {
      console.log("Req came")
       axios.get(`http://localhost:8080/api/v1/post/${id}`)
       .then((response) => {
        setLoading(false);
        setBlog(response.data.blog);
      }).catch((error) => {
        console.error("Error fetching blogs:", error);
      });
    }, [id]);
    return(
      { blog  , loading}
    )    
  };
  

  
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

// interface Blog{
//   title :string;
//   content :string
//   id:string
//   authorId:{
//     author :string
//   }
// }

export const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState("");
  
    useEffect(() => {
      axios.get(`http://localhost:8080/api/v1/posts`).then((response) => {
        setBlogs(response.data);
        setLoading(true)
      }).catch((error) => {
        console.error("Error fetching blogs:", error);
      });
    }, []);
  
    return(
      {loading,
      blogs}
    )    
  };
  

  export const useEachBlogs = ({id}:any) => {
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState<any>({});
  
    useEffect( () => {
       axios.get(`http://localhost:8080/api/v1/post/${id}`)
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
  

  
import axios from 'axios';
import { useEffect , useState} from "react";

interface Blog{
    title :string;
    content :string
    id:string
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<Blog[]>([]);
  
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
  

  export const useEachBlogs = ({id}:{id:String}) => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<Blog[]>([]);
  
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
  

  
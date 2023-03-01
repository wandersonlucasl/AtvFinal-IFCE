
import { useState, useEffect } from "react";
import "./Posts.css";
import blogPweb from "../axios/config";

const Posts = () => {

    const [posts, setPosts] = useState([]);
  
    const getPosts = async() => {
      try {
        const response = await blogPweb.get("/posts");
  
        const data = response.data;
  
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
  
    }
    useEffect(() => {
      getPosts();
  
    }, []);
    return <div className="home">
      <h1>Ultimos posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            
          </div>
        ))
      )}
    </div>
  };
  
  export default Posts;
  
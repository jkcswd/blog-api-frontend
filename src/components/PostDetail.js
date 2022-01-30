import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const location = useLocation();

  useEffect(() =>{
    fetchPost();
  },[]);

  const fetchPost = async () => {
    const response = await fetch(`http://localhost:3000/api/post/${location.pathname}`, {mode:'cors'});
    const post = await response.json();

    setPost(post);
  }

  return (
    <div className="PostDetail">
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  )
}

export default PostDetail;    
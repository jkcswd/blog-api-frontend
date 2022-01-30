import { useEffect, useState } from "react";

const PostsDisplay = () => {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/api/post', {mode:'cors'});
    const posts = await response.json();

    setPosts(posts);
  }
  
  return (
    <section className='post-display'>
      {posts.map(post => {
        return(
          <div className='blog-post'>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </div>
        )
      })}
  </section>
  )
}
export default PostsDisplay;     
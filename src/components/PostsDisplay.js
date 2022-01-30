import { useEffect, useState } from "react";

const PostsDisplay = () => {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    fetchPosts();
  },[]);

  const fetchPosts = async () => {
    const response = await fetch('http://localhost:3000/api/post', {mode:'cors'});
    const posts = await response.json();

    setPosts(posts);
  }
  
  return (
    <section className='post-display'>
      {posts.map(post => {
        if(post.isPublished) {
          return(
            <div className='blog-post'>
              <h1>{post.title}</h1>
              <p>{'By ' + post.user.firstName + ' ' + post.user.lastName}</p>
            </div>
          )
        }

        return null;
      })}
  </section>
  )
}
export default PostsDisplay;     
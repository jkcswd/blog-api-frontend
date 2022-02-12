import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/PostsDisplay.css'

const PostsDisplay = () => {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    fetchPosts();
  },[]);

  const fetchPosts = async () => {
    const response = await fetch('https://powerful-depths-39238.herokuapp.com/api/post', {mode:'cors'});
    const posts = await response.json();

    setPosts(posts);
  }
  
  return (
    <section className="PostsDisplay">
      {posts.map(post => {
        if(post.isPublished) {
          return(
            <div className="blog-post" key={post._id}>
              <Link to={'/' + post._id}>
                <h1>{post.title}</h1>
                <p>{'By ' + post.user.firstName + ' ' + post.user.lastName}</p>
              </Link>
            </div>
          )
        }
        return null;
      })}
  </section>
  )
}
export default PostsDisplay;     
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  useEffect(() =>{
    fetchPost();
    fetchComments();
  }, []);

  const fetchPost = async () => {
    const response = await fetch(`http://localhost:8000/api/post/${location.pathname}`, {mode:'cors'});
    const post = await response.json();

    setPost(post);
  }

  const fetchComments = async () => {
    const response = await fetch(`http://localhost:8000/api/post/${location.pathname}/comments`, {mode:'cors'});
    const comments = await response.json();

    setCommentArray(comments);
  }

  const sendCommentToApi = async (e) => {
    e.preventDefault(); //prevent page refresh on click

    if(comment) {
      await fetch('http://localhost:8000/api/comment/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            comment,
            post: location.pathname.substring(1), // Remove '/' from pathname to return post id only
            user:'61f70a6a6efc017bbd591282'
          }
        )
      });
    } 

    setComment(''); 
  }

  const handleComment = (e) => {
    const sentComment = e.target.value

    setComment(sentComment);
  }

  return (
    <div className="PostDetail">
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <h2>Comments</h2>
      <form onSubmit={sendCommentToApi}>
        <input type="text" value={comment} onChange={handleComment}/>
        <input type="submit" />
      </form>
      {commentArray.map(comment => {
        return(
          <div key={comment._id}>
            <p>{comment.comment}</p>
            <p>{comment.user.username}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PostDetail;    
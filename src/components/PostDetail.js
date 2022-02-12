import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '../styles/PostDetail.css'

const PostDetail = () => {
  const location = useLocation();

  const [post, setPost] = useState({});
  const [comment, setComment] = useState('');
  const [commentToSend, setCommentToSend] = useState('')
  const [commentArray, setCommentArray] = useState([]);

  useEffect(() =>{
    const sendCommentToApi = async () => {
      if(commentToSend) {
        await fetch('https://powerful-depths-39238.herokuapp.com/api/comment/', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              comment: commentToSend,
              post: location.pathname.substring(1), // Remove '/' from pathname to return post id only
              user: JSON.parse(localStorage.userDetails)._id || '61f70a6a6efc017bbd591282' // String is id of anon user
            }
          )
        });
      } 
  
      setComment(''); 
    }
    sendCommentToApi();

    const fetchPost = async () => {
      const response = await fetch(`https://powerful-depths-39238.herokuapp.com/api/post/${location.pathname}`, {mode:'cors'});
      const post = await response.json();
  
      setPost(post);
    }
    fetchPost();

    const fetchComments = async () => {
      const response = await fetch(`https://powerful-depths-39238.herokuapp.com/api/post/${location.pathname}/comments`, {mode:'cors'});
      const comments = await response.json();
  
      setCommentArray(comments);
    }
    fetchComments();
  }, [commentToSend, location.pathname]);

  const updateCommentToSend = (e) => {
    setCommentToSend(comment);
  }

  const handleComment = (e) => {
    const sentComment = e.target.value

    setComment(sentComment);
  }

  return (
    <div className="PostDetail">
      <Header/>
      <section className="content">
        <h1>{post.title}</h1>
        <p>{post.text}</p>
        <div className="comments">
          <h2>Comments</h2>
          <form onSubmit={updateCommentToSend}>
            <textarea value={comment} onChange={handleComment}/>
            <input className="button" type="submit" value="Submit Comment"/>
          </form>
          {commentArray.map(comment => {
            return(
              <div className="comment" key={comment._id}>
                <p>{comment.comment}</p>
                <p className="user">{comment.user.username} ({comment.datePublished})</p>
              </div>
            )
          })}
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default PostDetail;    
import './App.css';
import { useEffect, useState } from 'react';

function App() {
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
    <div className="App">

    </div>
  );
}

export default App;

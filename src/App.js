import './App.css';
import Header from './components/Header';
import Information from './components/Information';
import PostsDisplay from './components/PostsDisplay';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="App">
      <Header/>
      <Information/>
      <PostsDisplay/>
      <Footer/>
    </div>
  );
}

export default App;

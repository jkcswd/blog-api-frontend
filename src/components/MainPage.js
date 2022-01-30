import Header from './Header';
import Information from './Information';
import PostsDisplay from './PostsDisplay';
import Footer from './Footer';

const MainPage = () => {
  return (
    <div className="MainPage">
      <Header/>
      <Information/>
      <PostsDisplay/>
      <Footer/>
    </div>
  )
}

export default MainPage;     
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import PostDetail from './components/PostDetail';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/:id" element= {<PostDetail/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

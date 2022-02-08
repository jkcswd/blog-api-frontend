import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className='title'>BLOG</h1> 
      </Link>
    </div>
  )
}

export default Header;      
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to= {'/'} className= "new-btn1">Página Inicial</Link>
      </h2>
      <ul>
          <Link to= {'/'} className= "new-btn">Posts</Link>
        
          <Link to= {'/fotos'} className= "new-btn">Imagens</Link>
        
          <Link to= {'/users'} className= "new-btn">Usuários</Link>
      </ul>
    </nav>
  )
}

export default Navbar
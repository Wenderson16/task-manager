// src/components/NavBar.js
import { Link } from 'react-router-dom';
//import './NavBar.js'; // opcional para estilização

function NavBar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#282c34'
     }}>
      <Link to="/" style={{ marginRight: '10px'  }}>Home</Link>
      <Link to="/tasks" style={{ marginRight: '10px' }}>Tasks</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default NavBar;

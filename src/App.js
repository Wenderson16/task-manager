// src/App.js
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

import NavBar from './components/NavBar'; // Componente NavBar

function App() {
  const location = useLocation();

  return (
    <Router>
      {/* Condicionando a renderização da NavBar */}
      {location.pathname !== "/login" && <NavBar />} {/* NavBar só aparece se não estiver na página de Login */}
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
    
      </Routes>
    </Router>
  );
}

export default App;

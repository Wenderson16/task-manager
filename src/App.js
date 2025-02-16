// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import NavBar from './components/NavBar'; // importe o componente NavBar



function App() {
  return (
    <Router>
       <NavBar /> {/* A NavBar será exibida em todas as rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;


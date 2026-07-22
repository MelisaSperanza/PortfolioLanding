import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import Projects from "./pages/Projects";
import VehiculosApp from "./pages/VehiculosApp";
import Design from "./pages/Design";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/design" element={<Design />} />
        <Route path="/vehiculosapp" element={<VehiculosApp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import ColorVote from "./screens/vote";
import { Test } from "./screens/test";

export default function App() {
  return (
    <Routes>
      {/* Ruta de inicio */}
      <Route path="/" element={<Home />} />

      {/* Ruta del test */}
      <Route path="/test" element={<Test />} />

      {/* Ruta de votación */}
      <Route path="/vote" element={<ColorVote />} />

      {/* Ruta para no encontrados */}
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
}

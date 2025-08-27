import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="home-title">Bienvenido 🎉</h1>
      <p className="home-description">
        Elige una opción para comenzar la experiencia:
      </p>

      <div className="home-buttons">
        <button
          onClick={() => navigate("/vote")}
          className="btn btn-blue"
        >
          🎨 Ir a Votación
        </button>

        <button
          onClick={() => navigate("/test")}
          className="btn btn-green"
        >
          🧠 Ir al Test
        </button>
      </div>
    </div>
  );
}
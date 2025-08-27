import { useState } from "react";
import "./Vote.css";

export default function ColorVote() {
  const [color, setColor] = useState<string | null>(null);

  const handleVote = (chosenColor: string) => {
    setColor(chosenColor);
  };

  return (
    <div className={`vote-screen ${color ? "voted" : ""}`} style={{ backgroundColor: color || "white" }}>
      {!color && (
        <>
          <h1 className="vote-title">🎨 Vota eligiendo un color</h1>
          <div className="vote-buttons">
            <button onClick={() => handleVote("navy")} className="btn btn-blue">
              Azul 🔵
            </button>
            <button onClick={() => handleVote("gold")} className="btn btn-yellow">
              Amarillo 🟡
            </button>
          </div>
        </>
      )}

      {color && (
        <button onClick={() => setColor(null)} className="btn-reset">
          🔄 Cambiar voto
        </button>
      )}
    </div>
  );
}

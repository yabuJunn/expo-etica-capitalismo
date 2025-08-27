import { useState } from "react";
import "./Test.css";

const questions = [
    "Creo que el dinero justifica romper algunas reglas.",
    "Si puedo sacar ventaja en un negocio, lo hago aunque otros salgan perjudicados.",
    "El mercado debe funcionar sin interferencia del Estado, aunque eso signifique desigualdad.",
    "La riqueza de los ricos demuestra que son más inteligentes o trabajadores que los demás.",
    "Los trabajadores existen para generar ganancias, no para que yo piense en su bienestar.",
    "Si puedo evitar pagar impuestos, lo hago sin remordimiento.",
    "En los negocios, ser egoísta es la clave del éxito.",
    "Creo que los “job creators” (los ricos) merecen gratitud y admiración.",
    "Prefiero ver a la gente como competidores que como colaboradores.",
    "Los problemas ambientales y sociales no deberían frenar las oportunidades de negocio.",
];

const results = [
    {
        min: 10,
        max: 20,
        title: "El Rebelde Ético 🕊️",
        description:
            "Te importa más la moral que el dinero. Crees que el capitalismo necesita límites y regulaciones.",
    },
    {
        min: 21,
        max: 30,
        title: "El Capitalista con Conciencia 🤝",
        description:
            "Te gusta competir y progresar, pero intentas mantenerte dentro de la ética.",
    },
    {
        min: 31,
        max: 40,
        title: "El Tiburón del Mercado 🦈",
        description:
            "Te importa ganar y sabes que los negocios requieren dureza. La moral es secundaria.",
    },
    {
        min: 41,
        max: 50,
        title: "El Psicópata Capitalista 🤑",
        description:
            "El artículo de Deresiewicz te describiría perfecto. Crees que la riqueza es prueba de superioridad y que el fin justifica los medios.",
    },
];

export function Test() {
    const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
    const [score, setScore] = useState<number | null>(null);

    const handleChange = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = parseInt(value);
        setAnswers(newAnswers);
    };

    const calculateResult = () => {
        if (answers.includes(0)) {
            alert("Por favor, responde todas las preguntas antes de calcular el resultado.");
            return;
        }
        const total = answers.reduce((acc, val) => acc + (val || 0), 0);
        setScore(total);
    };

    const getResult = () => {
        if (score === null) return null;
        return results.find((r) => score >= r.min && score <= r.max);
    };

    const result = getResult();

    return (
        <div className="test-container">
            <h1 className="test-title">
                🧠 Test: ¿Qué tan Psicópata Capitalista eres?
            </h1>

            {!score && (
                <div className="test-instructions">
                    <p>
                        📋 <strong>Instrucciones:</strong> Lee cada afirmación y responde del 1 al 5:
                    </p>
                    <ul>
                        <li>1 = Totalmente en desacuerdo</li>
                        <li>2 = En desacuerdo</li>
                        <li>3 = Neutral</li>
                        <li>4 = De acuerdo</li>
                        <li>5 = Totalmente de acuerdo</li>
                    </ul>
                </div>
            )}

            {!score && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        calculateResult();
                    }}
                    className="test-form"
                >
                    {questions.map((q, i) => (
                        <div key={i} className="question-card">
                            <p className="question-text">
                                {i + 1}. {q}
                            </p>
                            <div className="options">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <label key={num} className="option">
                                        <input
                                            type="radio"
                                            name={`q-${i}`}
                                            value={num}
                                            checked={answers[i] === num}
                                            onChange={(e) => handleChange(i, e.target.value)}
                                        />
                                        {num}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button type="submit" className="btn-submit">
                        Calcular Resultado
                    </button>
                </form>
            )}

            {score && result && (
                <div className="result-card">
                    <h2 className="result-title">{result.title}</h2>
                    <p className="result-description">{result.description}</p>
                    <p className="result-score">Tu puntaje: {score}</p>

                    <button
                        onClick={() => {
                            setAnswers(Array(questions.length).fill(0));
                            setScore(null);
                        }}
                        className="btn-retry"
                    >
                        Volver a intentarlo
                    </button>
                </div>
            )}
        </div>
    );
}

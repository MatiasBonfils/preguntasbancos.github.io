const preguntas = [
    "¿Cuál es la capital de Francia?",
    "¿Quién pintó la Mona Lisa?",
    "¿Cuál es el río más largo del mundo?",
    "¿Quién escribió 'Cien años de soledad'?",
    "¿Cuál es el planeta más grande del sistema solar?",
    "¿Quién fue el primer presidente de los Estados Unidos?",
    "¿En qué año llegó el hombre a la Luna?",
    "¿Cuál es el idioma más hablado del mundo?",
    "¿Qué elemento químico tiene el símbolo O?",
    "¿Quién compuso la Novena Sinfonía?"
];

let indiceActual = Math.floor(Math.random() * preguntas.length);
const preguntaDiv = document.getElementById('pregunta');
const anteriorBtn = document.getElementById('anterior');
const siguienteBtn = document.getElementById('siguiente');

const mostrarPregunta = () => {
    preguntaDiv.textContent = preguntas[indiceActual];
    anteriorBtn.style.display = indiceActual === 0 ? 'none' : 'inline-block';
};

anteriorBtn.addEventListener('click', () => {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPregunta();
    }
});

siguienteBtn.addEventListener('click', () => {
    if (indiceActual < preguntas.length - 1) {
        indiceActual++;
        mostrarPregunta();
    } else {
        indiceActual = Math.floor(Math.random() * preguntas.length);
        mostrarPregunta();
    }
});

mostrarPregunta();
//wow que loco

const games = [
    { id: 1, title: "MemoryCards", description: "Entrena tu memoria", image: "./assets/memoria.png", url: "https://tarjetas-de-memoria.vercel.app/", adult: false, type: "game" },
    { id: 2, title: "Numberdle", description: "Adivina el número aleatorio", image: "./assets/numberdle-img.png", url: "https://numberdle.vercel.app/", adult: false, type: "game" },
    { id: 3, title: "Top100filmdle", description: "Descubre qué película se esconde", image: "./assets/filmdle.png", url: "https://topfilmdle.vercel.app/", adult: false, type: "game" },
    { id: 4, title: "Reto o Verdad", description: "Demuestra lo valiente que eres a tus amigxs", image: "./assets/reto-verdad.png", url: "https://reto-o-verdad.vercel.app/", adult: true, type: "game" },
    { id: 5, title: "KMsutra fun fun", description: "Juega despertando la pasión de forma random", image: "./assets/kmsutra.png", url: "https://kmsutra45.vercel.app/", adult: true, type: "game" },
    { id: 6, title: "Hero LucaWeb3 Services Theme", description: "Dale vida a tu idea Web3", image: "./assets/hero-luca-web.png", url: "https://web-hero-luca.vercel.app/", adult: false, type: "project" },
    { id: 7, title: "$LUCA mEmE coin", description: "A digital microbe mEmE coin for everyone", image: "./assets/luca-coin.png", url: "https://lucacoin.vercel.app/", adult: false, type: "project" },
    { id: 8, title: "Pomodoro SkillsUp App", description: "Mejora conocimientos con un sistema eficaz", image: "./assets/pomodoroskillsup.png", url: "https://pomodoro-skillsup.vercel.app/", adult: false, type: "project" },
    { id: 9, title: "Blog website theme ", description: "Un blog de categoría...y etiquetas", image: "./assets/blog-website.jpg", url: "https://blog-website-theme.vercel.app/", adult: false, type: "project" },
    { id: 10, title: "CRM NoSeMeEscapa ", description: "Un CRM para profesionales>clientes", image: "./assets/crm-nosemeescapa.JPG", url: "https://github.com/Eccedev/NoSeMeEscapa-CRM/tree/main", adult: false, type: "project" },
    { id: 10, title: "RobotsIdeas ", description: "1 human project + quantum anomaly... QuBoX", image: "./assets/robotsideas.JPG", url: "https://robotsideas.vercel.app/", adult: false, type: "project" }
];

// Elementos del DOM
const catalogBtn = document.getElementById('catalogBtn');
const randomBtn = document.getElementById('randomBtn');
const adultsBtn = document.getElementById('adultsBtn');
const projectsBtn = document.getElementById('projectsBtn');
const welcomeSection = document.getElementById('welcome');
const catalogSection = document.getElementById('catalog');
const randomGameSection = document.getElementById('randomGame');
const projectsSection = document.getElementById('projects');
const gameGrid = document.getElementById('gameGrid');
const projectGrid = document.getElementById('projectGrid');
const randomGameContainer = document.getElementById('randomGameContainer');

// Eventos para los botones
catalogBtn.addEventListener('click', () => showItems('game', false));
randomBtn.addEventListener('click', selectRandomGame);
adultsBtn.addEventListener('click', () => showItems('game', true));
projectsBtn.addEventListener('click', () => showItems('project', false));

// Función para mostrar juegos o proyectos
function showItems(type, adultsOnly) {
    welcomeSection.classList.remove('active');
    randomGameSection.classList.remove('active');
    catalogSection.classList.remove('active');
    projectsSection.classList.remove('active');

    if (type === 'game') {
        catalogSection.classList.add('active');
        renderGrid(gameGrid, type, adultsOnly);
    } else if (type === 'project') {
        projectsSection.classList.add('active');
        renderGrid(projectGrid, type, adultsOnly);
    }
}

// Función para renderizar la cuadrícula de juegos o proyectos
function renderGrid(grid, type, adultsOnly) {
    grid.innerHTML = '';
    const filteredItems = games.filter(item => 
        item.type === type && (type === 'project' || item.adult === adultsOnly)
    );
    filteredItems.forEach(item => {
        const itemCard = createGameCard(item);
        grid.appendChild(itemCard);
    });
}

// Función para crear una tarjeta de juego o proyecto
function createGameCard(item) {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    gameCard.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <button>Ver ${item.type === 'game' ? 'juego' : 'proyecto'}</button>
    `;
    
    // Hacer toda la tarjeta clickeable
    gameCard.style.cursor = 'pointer';
    gameCard.addEventListener('click', (event) => {
        // Evitar que el clic en el botón dispare dos veces el evento
        if (event.target.tagName !== 'BUTTON') {
            window.location.href = item.url;
        }
    });

    // Manejar el clic en el botón separadamente
    const button = gameCard.querySelector('button');
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague a la tarjeta
        window.location.href = item.url;
    });

    return gameCard;
}

// Función para seleccionar un juego aleatorio (solo juegos no para adultos)
function selectRandomGame() {
    const nonAdultGames = games.filter(game => !game.adult && game.type === 'game');
    const randomIndex = Math.floor(Math.random() * nonAdultGames.length);
    const randomGame = nonAdultGames[randomIndex];
    
    welcomeSection.classList.remove('active');
    catalogSection.classList.remove('active');
    projectsSection.classList.remove('active');
    randomGameSection.classList.add('active');
    
    randomGameContainer.innerHTML = '';
    const gameCard = createGameCard(randomGame);
    randomGameContainer.appendChild(gameCard);
}

// Inicializa mostrando la sección de bienvenida y el catálogo de juegos
document.addEventListener('DOMContentLoaded', () => {
    renderGrid(gameGrid, 'game', false); // Carga el catálogo de juegos "no adultos" al inicio
});


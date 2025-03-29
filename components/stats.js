const stats = [
  {
    valor: 1000,
    description: "Happy Travelers",
  },
  {
    valor: 50,
    description: "Countries",
  },
  {
    valor: 200,
    description: "Tours",
  },
  {
    valor: 10,
    description: "Years Experience",
  },
];

const statsGrid = document.querySelector(".stats-grid");

// Función para actualizar los valores
function updateStats() {
  statsGrid.innerHTML = '';

  stats.forEach((stat) => {
    const card = document.createElement("div");
    card.classList.add("stat-card");

    card.innerHTML = `
          <h3>${stat.valor}+</h3>
          <p>${stat.description}</p>
      `;

    statsGrid.appendChild(card);
  });
}

setInterval(updateStats, 1000);

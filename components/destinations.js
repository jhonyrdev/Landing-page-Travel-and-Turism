const destinations = [
  {
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Pristine white buildings and stunning sunsets",
    cost: "$2000-$3500",
    season: "Spring/Summer",
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Tropical paradise with rich culture",
    cost: "$1500-$2500",
    season: "Year-round",
  },
  {
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    description: "Majestic mountains and winter sports",
    cost: "$3000-$4500",
    season: "Winter",
  },
  {
    name: "Kyoto, Japan",
    image: "https://imggraficos.gruporeforma.com/2021/07/Captura-de-Pantalla-2021-07-29-a-las-16.23.39-1024x681.png",
    description: "Beautiful temples and cultural heritage",
    cost: "$2200-$3500",
    season: "Spring/Fall",
  },
];

const destinationsGrid = document.querySelector(".destinations-grid");
destinations.forEach(destination => {
  const card = document.createElement("div");
  card.classList.add("destination-card");

  card.innerHTML = `
    <img src="${destination.image}" alt="${destination.name}" class="destination-image" loading="lazy">
    <div class="destination-content">
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
      <div class="destination-detalles">
        <p><strong></strong>${destination.cost}</p>
        <span><strong></strong>${destination.season}</span>
      </div>
    </div>
  `;
  
  destinationsGrid.appendChild(card);
});

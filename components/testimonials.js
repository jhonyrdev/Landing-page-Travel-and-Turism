const testimonials = [
  {
    name: "Juan Perez",
    destination: "Bali",
    quote:
      "Our trip to Bali was a dream! The entire planning was seamless and unforgettable.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    stars: 5, // Agregando el valor de las estrellas
  },
  {
    name: "Ana García",
    destination: "Swiss Alps",
    quote:
      "Had the best time in the Swiss Alps! The scenery was absolutely breathtaking.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    stars: 4, 
  },
];

const testimonialsGrid = document.querySelector(".testimonials-grid");

function generateStars(stars) {
  let starHtml = "";
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starHtml += `<i class="bi bi-star-fill"></i>`; // Estrella llena
    } else {
      starHtml += `<i class="bi bi-star"></i>`; // Estrella vacía
    }
  }
  return starHtml;
}

testimonials.forEach((testimonial) => {
  const card = document.createElement("div");
  card.classList.add("testimonial-card");

  card.innerHTML = `
    <div class="testimonial-detalle">
      <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image" loading="lazy">
      <div class="testimonial-info">
        <p class="testimonial-name">${testimonial.name}</p>
        <p class="testimonial-destination">${testimonial.destination}</p>
      </div>
    </div>
      <p class="testimonial-quote">"${testimonial.quote}"</p>
      <div class="testimonial-stars">${generateStars(testimonial.stars)}</div>
  `;

  testimonialsGrid.appendChild(card);
});


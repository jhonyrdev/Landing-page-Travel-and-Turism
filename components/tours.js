const tours = [
    {
      name: "Paris City Tour",
      image: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_2118458942_ss_non-editorial_jnjpwq?_a=BAVARSAP0",
      description: "Explore the Eiffel Tower, Louvre Museum and more",
      duration: "4 Days",
      price: "$700",
    },
    {
      name: "Machu Picchu, Peru",
      image: "https://www.perurail.com/wp-content/uploads/2022/06/banner-machu-picchu-1.jpg",
      description: "Ancient ruins and mystical landscapes",
      duration: "7 Days",
      price: "$2200",
    },
  ];
  
  const toursGrid = document.querySelector(".tours-grid");
  tours.forEach(tour => {
    const card = document.createElement("div");
    card.classList.add("tour-card");
  
    card.innerHTML = `
      <img src="${tour.image}" alt="${tour.name}" class="tour-image" loading="lazy">
      <div class="tour-content">
        <h3>${tour.name}</h3>
        <p>${tour.description}</p>
        <div class="tour-detalles">
          <p><strong></strong>${tour.price}</p>
          <p><strong></strong>${tour.duration}</p>
        </div>
      </div>
    `;
    
    toursGrid.appendChild(card);
  });
  
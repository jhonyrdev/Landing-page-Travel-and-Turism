const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');
const navbarLogo = document.getElementById('navbar-logo');
const menuicon = document.getElementById('menu-icon');
const navbarLinkItems = document.querySelectorAll('.navbar-link');

// Detecta el desplazamiento de la página
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#fff";
    navbarLogo.style.color = "#000";
    menuicon.style.color = "#000";
    navbar.classList.add('active');
    navbarLinkItems.forEach(link => {
      link.style.color = "#000";
    });

    // Si se hizo scroll, cierra el menú si está abierto
    if (navbarLinks.classList.contains('active')) {
      navbarLinks.classList.remove('active');
      navbar.classList.remove('active');
      navbarLinkItems.forEach(link => {
        link.classList.remove('active');
        link.style.color = "";
      });
    }
  } else {
    // Si no se hizo scroll, elimina la clase active
    navbar.classList.remove('active');
    navbarLogo.style.color = "#fff";
    menuicon.style.color = "#fff";
    navbar.style.backgroundColor = "transparent";
    navbarLinkItems.forEach(link => {
      link.style.color = "#fff";
    });
  }
});

// Función para manejar el cambio de estado del menú (mobile)
menuToggle.addEventListener('click', () => {

  navbar.classList.toggle('active');
  navbarLinks.classList.toggle('active');

  navbarLinkItems.forEach(link => {
    link.classList.toggle('active');
    link.style.color = "#000"; 
  });
});

// Detectar clic fuera del menú para cerrarlo
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
    if (navbarLinks.classList.contains('active')) {
      navbarLinks.classList.remove('active');
      navbar.classList.remove('active');
      navbarLinkItems.forEach(link => {
        link.classList.remove('active');
        link.style.color = "";
      });
    }
  }
});

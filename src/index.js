function toggleMenu() {
  const navbar = document.querySelector(".nav-bar");
  if (navbar) {
    navbar.classList.toggle("show");
  } else {
    console.log("No nav bar found");
  }
}

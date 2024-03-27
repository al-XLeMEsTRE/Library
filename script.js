// Get the hamburger menu button and navigation list
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav__list");

// Add a click event listener to the hamburger menu button
hamburgerMenu.addEventListener("click", function () {
  // Log to the console when the hamburger menu is clicked
  console.log("Hamburger menu clicked!");

  // Toggle the 'active' class on the navigation list
  navList.classList.toggle("active");
});

const hidden = document.getElementById("hidden-links");
const hamburgerMenu = document.querySelector(".hamburger-menu");


hamburgerMenu.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the window click listener
    hidden.style.display = (hidden.style.display === "none") ? "block" : "none";
});

// Add a click event listener to the window to close the element when clicking outside
window.addEventListener("click", () => {
    hidden.style.display = "none";
});
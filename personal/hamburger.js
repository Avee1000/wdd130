const hidden = document.getElementById("hidden-links");

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    if (hidden.style.display == "none"){
        hidden.style.display = "block";
    }else {
        hidden.style.display = "none";
    }
});
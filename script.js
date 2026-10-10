
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Ouvrir et fermer le menu
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");

    // Changer le symbole du bouton
    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Fermer le menu après un clic sur un lien
document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });

});
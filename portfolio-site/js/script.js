// Typing-Animation
var typed = new Typed(".typing", {
    strings: ["Student", "Software Engineer", "Apprentice"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Navigation Links
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

// Event listener für jeden Navigations-Link
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // Entfernt die 'active' Klasse von allen Links und Abschnitten
        navLinks.forEach(nav => nav.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active"));

        // Fügt 'active' Klasse zum angeklickten Link und zur Ziel-Sektion hinzu
        this.classList.add("active");
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).classList.add("active");
    });
});

// Event Listener für "More About Me" und "Contact Me" Buttons
document.getElementById("more-about-me").addEventListener("click", function() {
    scrollToSection("about");
});

document.getElementById("contact-me").addEventListener("click", function() {
    scrollToSection("contact");
});

// Funktion zum Scrollen zur Ziel-Sektion
function scrollToSection(targetId) {
    // Entfernt die 'active' Klasse von allen Abschnitten
    sections.forEach(section => section.classList.remove("active"));

    // Fügt 'active' Klasse zur Ziel-Sektion hinzu
    document.getElementById(targetId).classList.add("active");

    // Scrollt zur Ziel-Sektion
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
}

    // Auswahl der Sidebar und des Toggle-Knopfes
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

// Event-Listener für das Klicken auf den Knopf
navTogglerBtn.addEventListener("click", () => {
    // Sidebar sichtbar machen
    aside.classList.toggle("open");
    // Knopf als aktiv kennzeichnen
    navTogglerBtn.classList.toggle("active");
});
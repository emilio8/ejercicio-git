document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.querySelector("h1");
    
    titulo.addEventListener("mouseenter", function () {
        titulo.style.backgroundColor = "pink";
    });
    
    titulo.addEventListener("mouseleave", function () {
        titulo.style.backgroundColor = "";
    });
});
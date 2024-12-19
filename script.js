"use strict";

const prevButton = document.querySelector('#prev'); // Sélectionne le bouton précédent dans le DOM
const nextButton = document.querySelector('#next'); // Sélectionne le bouton suivant dans le DOM
const slides = document.querySelectorAll('.slide'); // Sélectionne toutes les diapositives ayant la classe "slide"
const container = document.querySelector('.carousel'); // Sélectionne le conteneur du carrousel
let interval; // Variable pour stocker l'intervalle de changement automatique

function goToNextSlide() { // Fonction pour passer à la diapositive suivante
    const currentSlide = document.querySelector('.active'); // Récupère la diapositive actuellement active
    const nextSlide = currentSlide.nextElementSibling || slides[0]; // Sélectionne la diapositive suivante ou revient à la première si aucune suivante
    currentSlide.classList.remove('active'); // Supprime la classe "active" de la diapositive actuelle
    nextSlide.classList.add('active'); // Ajoute la classe "active" à la diapositive suivante
}

function goToPrevSlide() { // Fonction pour passer à la diapositive précédente
    const currentSlide = document.querySelector('.active'); // Récupère la diapositive actuellement active
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Sélectionne la diapositive précédente ou revient à la dernière si aucune précédente
    currentSlide.classList.remove('active'); // Supprime la classe "active" de la diapositive actuelle
    prevSlide.classList.add('active'); // Ajoute la classe "active" à la diapositive précédente
}

prevButton.addEventListener('click', goToPrevSlide); // Ajoute un événement de clic sur le bouton précédent pour passer à la diapositive précédente
nextButton.addEventListener('click', goToNextSlide); // Ajoute un événement de clic sur le bouton suivant pour passer à la diapositive suivante

function startAutoSlide() { // Fonction pour démarrer le changement automatique des diapositives
    interval = setInterval(() => {goToNextSlide();}, // Définit un intervalle pour passer automatiquement à la diapositive suivante toutes les 5 secondes
    5000); // Change toutes les 5 secondes
}

function stopAutoSlide() {// Fonction pour arrêter le changement automatique des diapositives
    clearInterval(interval); // Arrête l'intervalle défini pour le changement automatique
}

startAutoSlide(); // Lance le changement automatique des diapositives au chargement de la page
container.addEventListener('mouseenter', stopAutoSlide); // Ajoute un événement pour arrêter le changement automatique lorsque la souris entre dans le conteneur
container.addEventListener('mouseleave', startAutoSlide); // Ajoute un événement pour reprendre le changement automatique lorsque la souris quitte le conteneur

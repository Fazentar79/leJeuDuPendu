// Variables des modals
let rulesModal = document.querySelector(".rules__modal");
let btnRules = document.querySelector(".text__menu-rules");
let themeModal = document.querySelector(".theme__modal");
let btnTheme = document.querySelector(".text__menu-theme");

// Variables des choix de thème
let btnChoiceAnimals = document.querySelector(".theme__choice--animals");
let btnChoicePays = document.querySelector(".theme__choice--pays");
let btnChoiceFruitsAndVegetables = document.querySelector(".theme__choice--fruitsAndVegetables");
let btnChoiceEverydayObjects = document.querySelector(".theme__choice--everydayObjects");
let btnChoiceMovies = document.querySelector(".theme__choice--movies");

// Variables pour le DOM
let findWord = document.querySelector(".text__menu-findWord");

let choiceTheme = document.querySelector(".text__theme");

// Variables pour le jeu
let choiceStartTheme = choiceTheme.textContent = "Choisir un thème";

// Affiche ou cache les modals
function toggleModalRules() {
    if (rulesModal.style.display === "none" || btnRules.addEventListener("mouseover", toggleModalRules)) {
        rulesModal.style.display = "block";
        btnTheme.style.display = "none";
    }else {
        rulesModal.style.display = "none";
        btnTheme.style.display = "block";
    }
}

btnRules.addEventListener("mouseout", toggleModalRules);
btnTheme.addEventListener("click", () => { 
    themeModal.style.display = "block";
    btnRules.style.display = "none";
});

// Choix du thème

btnChoiceAnimals.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Animaux";
    themeModal.style.display = "none";
    btnRules.style.display = "block";
});

btnChoicePays.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Pays";
    themeModal.style.display = "none";
    btnRules.style.display = "block";
});

btnChoiceFruitsAndVegetables.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Fruits et légumes";
    themeModal.style.display = "none";
    btnRules.style.display = "block";
});

btnChoiceEverydayObjects.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Objets du quotidien";
    themeModal.style.display = "none";
    btnRules.style.display = "block";
});

btnChoiceMovies.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Films";
    themeModal.style.display = "none";
    btnRules.style.display = "block";
});

// Tableaux de mots

const animals = [
  "Lion", "Éléphant", "Tigre", "Girafe", "Kangourou", "Hippopotame",
  "Penguin", "Zèbre", "Koala", "Panda", "Rhino", "Ours Polaire",
  "Guépard", "Gorille", "Koala", "Dauphin", "Hérisson", "Léopard",
  "Puma", "Lémurien", "Pieuvre", "Caméléon", "Ornithorynque", "Autruche",
  "Perroquet", "Hippocampe", "Jaguar", "Écureuil", "Kookaburra", "Paresseux",
  "Pangolin", "Wallaby", "Tatou", "Pélican", "Narval", "Lynx",
  "Lièvre", "Gazelle", "Crocodile", "Pigeon", "Fou de Bassan", "Gerbille",
  "Hamster", "Wombat", "Mongoose", "Salamandre", "Porc-épic", "Frelon"
];

const countries = [
  "France", "États-Unis", "Canada", "Royaume-Uni", "Allemagne", "Australie",
  "Japon", "Chine", "Brésil", "Inde", "Mexique", "Russie",
  "Italie", "Espagne", "Argentine", "Afrique du Sud", "Suède", "Norvège",
  "Suisse", "Népal", "Thaïlande", "Indonésie", "Grèce", "Turquie",
  "Égypte", "Maroc", "Kenya", "Nigeria", "Chili", "Pérou",
  "Vietnam", "Malaisie", "Singapour", "Corée du Sud", "Nouvelle-Zélande", "Islande",
  "Portugal", "Irlande", "Pays-Bas", "Belgique", "Autriche", "Danemark",
  "Finlande", "République tchèque", "Hongrie", "Pologne", "Ukraine", "Croatie",
  "Sri Lanka", "Pakistan", "Bangladesh", "Israël"
];

const fruitsAndVegetables = [
  "Pomme", "Banane", "Orange", "Fraise", "Cerise", "Poire",
  "Raisin", "Kiwi", "Mangue", "Ananas", "Melon", "Pêche",
  "Tomate", "Carotte", "Pomme de terre", "Concombre", "Courgette", "Aubergine",
  "Brocoli", "Chou-fleur", "Laitue", "Épinard", "Poivron", "Radis",
  "Oignon", "Ail", "Céleri", "Asperge", "Avocat", "Pamplemousse",
  "Citron", "Pastèque", "Cassis", "Myrtille", "Framboise", "Canneberge",
  "Poivron", "Patate douce", "Navet", "Betterave", "Endive", "Haricot vert",
  "Courge", "Citrouille", "Figue", "Grenade", "Nectarine", "Kaki",
  "Chou", "Artichaut", "Rutabaga"
];

const everydayObjects = [
  "Téléphone", "Ordinateur", "Cafetière", "Télévision", "Réfrigérateur", "Table",
  "Chaise", "Lampe", "Horloge", "Tasse", "Assiette", "Couteau",
  "Four", "Micro-ondes", "Lave-linge", "Sèche-linge", "Canapé", "Clé",
  "Porte", "Fenêtre", "Miroir", "Brosse à dents", "Toilettes", "Douche",
  "Brosse à cheveux", "Livre", "Stylo", "Crayon", "Sac à main", "Portefeuille",
  "Clé USB", "Lunettes", "Sous-verre", "Parapluie", "Poubelle", "Balai",
  "Aspirateur", "Brosse à chaussures", "Bouteille d'eau", "Cadenas", "Serrure", "Cuisine",
  "Évier", "Miroir de maquillage", "Boîte aux lettres", "Télécommande", "Cadenas", "Échelle",
  "Radio", "Casque", "Sac à dos"
];

const movies = [
  "Avatar", "Titanic", "Matrix", "Inception", "Jurassic", "Gladiator",
  "Frozen", "Memento", "Jaws", "Braveheart", "Interstellar", "Gravity",
  "Seven", "Pulp Fiction", "Scarface", "Shrek", "Superman", "Zodiac",
  "Goonies", "Predator", "Die Hard", "Aliens", "Scream", "Psycho",
  "Transformers", "Godzilla", "Amadeus", "Hannibal", "Mystic River", "Wolverine",
  "Rocky", "Jumanji", "Zoolander", "Casino", "Twister", "Apocalypto",
  "Tron", "Clerks", "Jaws", "Twilight", "Alien", "Grease", "Eragon",
  "Tangled", "Shutter Island", "Beetle juice", "Halloween", "Joker", "Glory"
];

// image-0.png
// image-1.png
// image-2.png
// image-3.png
// let vie = 10;

//  On commence avec l'image 10
// document.querySelector(".image").src = "image-0.png";

// src="image-[nombre de vie].png"

// `image-${vie}.png`;
// Vérifier lettre
//   si pas bon
//    appeler la fonction retirerVie
// vie -= 1;
// document.querySelector(#pendu)
//  image. = nouvelle image

// motADevenier = ["T", "A", "B", "L", "E"];
// const motAfficher = []

// for (let i = 0; i < motADevenier.length; i++) {
    // if(motADevenier[i] != "-" && motADeviner[i] != " ") {
    //     motAfficher[i] = lettre;
// }
    // else {
    //     motAfficher[i] = motADevenier[i];
    // }
//     motAfficher.push("_");
// }
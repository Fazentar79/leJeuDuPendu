// Variables de sélection des modals
let rulesModal = document.querySelector(".rules__modal");
let btnRules = document.querySelector(".text__menu-rules");
let themeModal = document.querySelector(".theme__modal");
let btnTheme = document.querySelector(".text__menu-theme");
let btnReload = document.querySelector(".text__menu-reload");

// Variables de sélection des choix de thème
let btnChoiceAnimals = document.querySelector(".theme__choice--animals");
let btnChoicePays = document.querySelector(".theme__choice--pays");
let btnChoiceFruitsAndVegetables = document.querySelector(".theme__choice--fruitsAndVegetables");
let btnChoiceEverydayObjects = document.querySelector(".theme__choice--everydayObjects");
let btnChoiceMovies = document.querySelector(".theme__choice--movies");

// Variables pour le DOM
let findWord = document.querySelector(".text__menu-findWord");
let wordToFind = document.querySelector(".text__wordToFind");
let choiceTheme = document.querySelector(".text__theme");
let letters = document.querySelectorAll(".letter");
let hangmanImage = document.querySelector(".hangman__image");

// Variables pour le jeu
let choiceStartTheme = choiceTheme;
let ChosenLetter;
let chosenTheme;
let wordToGuess;
let wordToDisplay = [];
let life = 0;

// Affiche ou cache les modals
function toggleModalRules() {
    if (rulesModal.style.display === "none" || btnRules.addEventListener("mouseover", toggleModalRules)) {
        rulesModal.style.display = "block";
        btnTheme.style.display = "none";
        findWord.style.display = "none";
        btnReload.style.display = "none";
    }else {
        rulesModal.style.display = "none";
        btnTheme.style.display = "block";
        findWord.style.display = "block";
    }
}

function toggleMenu () {
    themeModal.style.display = "none";
    btnRules.style.display = "block";
    findWord.style.display = "block";
}

function toggleReload() {
    btnTheme.style.display = "none";
    btnReload.style.display = "block";
}

btnRules.addEventListener("mouseout", toggleModalRules);

btnTheme.addEventListener("click", () => { 
    themeModal.style.display = "block";
    btnRules.style.display = "none";
    findWord.style.display = "none";
});

// Thème de départ
choiceStartTheme.textContent = "Choisissez un thème dans la marge.";

//Choix aléatoire du mot à deviner selon le thème choisi
function randomWord() {
    wordToGuess = chosenTheme[Math.floor(Math.random() * chosenTheme.length)];
}

// Logique pour afficher les underscore et les espaces du mot à deviner
function underscore() {
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] != " ") {
            wordToFind.textContent += "_";
        } else if (wordToGuess[i] === " ") {
            wordToFind.textContent += " ";
        } else {
            wordToDisplay[i] = wordToGuess[i];
        }
    }
}

// Défaite ou victoire
function loseOrWin() {
    if (life === 10) {
        alert("Vous avez perdu ! Le mot était : " + wordToGuess + ".");
        location.reload();
    }else if (wordToFind.textContent === wordToGuess) {
        alert("Vous avez gagné ! Le mot est : " + wordToGuess + ".");
        location.reload();
    }
}

// Logique du jeu
function checkLetter() {
    let wrongLetter = false;
    for (let i = 0; i < wordToDisplay.length; i++) {
        if (ChosenLetter === wordToDisplay[i]) {
            wordToFind.textContent = wordToFind.textContent.substring(0, i) + ChosenLetter + wordToFind.textContent.substring(i + 1);
            wrongLetter = true;
        }
        else if (!wrongLetter) {     
            life++;
            hangmanImage.style.display = "block";
            console.log(life);            
        }
        loseOrWin(); 
    }    
}

// Reload du jeu
btnReload.addEventListener("click", () => {
    location.reload();
});

// Choix de lettre
letters.forEach((letter) => {
    letter.addEventListener("click", () => {
        ChosenLetter = letter.outerText;
        checkLetter();
    });
});

// Choix du thème
btnChoiceAnimals.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Animaux";
    toggleMenu();
    btnRules.style.display = "none";
    chosenTheme = animals;
    randomWord();
    wordToDisplay = wordToGuess.split("");
    underscore();
    console.log(wordToDisplay);
    toggleReload();
});

btnChoicePays.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Pays";
    toggleMenu();
    btnRules.style.display = "none";
    chosenTheme = countries;
    randomWord();
    wordToDisplay = wordToGuess.split("");
    underscore();
    console.log(wordToDisplay);
    toggleReload();
});

btnChoiceFruitsAndVegetables.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Fruits et légumes";
    toggleMenu();
    btnRules.style.display = "none";
    chosenTheme = fruitsAndVegetables;
    randomWord();
    wordToDisplay = wordToGuess.split("");
    underscore();
    console.log(wordToDisplay);
    toggleReload();
});

btnChoiceEverydayObjects.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Objets du quotidien";
    toggleMenu();
    btnRules.style.display = "none";
    chosenTheme = everydayObjects;
    randomWord();
    wordToDisplay = wordToGuess.split("");
    underscore();
    console.log(wordToDisplay);
    toggleReload();
});

btnChoiceMovies.addEventListener("click", () => {
    choiceTheme.textContent = "";
    choiceTheme.textContent = "Thème choisi : Films";
    toggleMenu();
    btnRules.style.display = "none";
    chosenTheme = movies;
    randomWord();
    wordToDisplay = wordToGuess.split("");
    underscore();
    console.log(wordToDisplay);
    toggleReload();
});



// Tableaux de mots

const animals = [
    "LION", "ELEPHANT", "TIGRE", "GIRAFE", "KANGOUROU", "HIPPOPOTAME",
    "PINGOUIN", "ZEBRE", "KOALA", "PANDA", "RHINO", "OURS POLAIRE",
    "GUEPARD", "GORILLE", "KOALA", "DAUPHIN", "HERISSON", "LEOPARD",
    "PUMA", "LEMURIEN", "PIEUVRE", "CAMELEON", "ORNITHORYNQUE", "AUTRUCHE",
    "PERROQUET", "HIPPOCAMPE", "JAGUAR", "ECUREUIL", "KOOKABURRA", "PARESSEUX",
    "PANGOLIN", "WALLABY", "TATOU", "PELICAN", "NARVAL", "LYNX",
    "LIEVRE", "GAZELLE", "CROCODILE", "PIGEON", "FOU DE BASSAN", "GERBILLE",
    "HAMSTER", "WOMBAT", "MANGOUSTE", "SALAMANDRE", "PORC EPIC", "FRELON"
];

const countries = [
    "FRANCE", "ETATS UNIS", "CANADA", "ROYAUME UNI", "ALLEMAGNE", "AUSTRALIE",
    "JAPON", "CHINE", "BRESIL", "INDE", "MEXIQUE", "RUSSIE",
    "ITALIE", "ESPAGNE", "ARGENTINE", "AFRIQUE DU SUD", "SUEDE", "NORVEGE",
    "SUISSE", "NEPAL", "THAILANDE", "INDONESIE", "GRECE", "TURQUIE",
    "EGYPTE", "MAROC", "KENYA", "NIGERIA", "CHILI", "PEROU",
    "VIETNAM", "MALAISIE", "SINGAPOUR", "COREE DU SUD", "NOUVELLE ZELANDE", "ISLANDE",
    "PORTUGAL", "IRLANDE", "PAYS BAS", "BELGIQUE", "AUTRICHE", "DANEMARK",
    "FINLANDE", "REPUBLIQUE TCHEQUE", "HONGRIE", "POLOGNE", "UKRAINE", "CROATIE",
    "SRI LANKA", "PAKISTAN", "BANGLADESH", "ECOSSE"
];

const fruitsAndVegetables = [
    "POMME", "BANANE", "ORANGE", "FRAISE", "CERISE", "POIRE",
    "RAISIN", "KIWI", "MANGUE", "ANANAS", "MELON", "PECHE",
    "TOMATE", "CAROTTE", "POMME DE TERRE", "CONCOMBRE", "COURGETTE", "AUBERGINE",
    "BROCOLI", "CHOU FLEUR", "LAITUE", "EPINARD", "POIVRON", "RADIS",
    "OIGNON", "AIL", "CELERI", "ASPERGE", "AVOCAT", "PAMPLEMOUSSE",
    "CITRON", "PASTEQUE", "CASSIS", "MYRTILLE", "FRAMBOISE", "CANNEBERGE",
    "POIVRON", "PATATE DOUCE", "NAVET", "BETTERAVE", "ENDIVE", "HARICOT VERT",
    "COURGE", "CITROUILLE", "FIGUE", "GRENADE", "NECTARINE", "KAKI",
    "CHOU", "ARTICHAUT", "RUTABAGA"
];

const everydayObjects = [
    "TELEPHONE", "ORDINATEUR", "CAFETIERE", "TELEVISION", "REFRIGERATEUR", "TABLE",
    "CHAISE", "LAMPE", "HORLOGE", "TASSE", "ASSIETTE", "COUTEAU",
    "FOUR", "MICRO ONDES", "LAVE LINGE", "SECHE LINGE", "CANAPE", "CLEF",
    "PORTE", "FENETRE", "MIROIR", "BROSSE A DENTS", "TOILETTES", "DOUCHE",
    "BROSSE A CHEVEUX", "LIVRE", "STYLO", "CRAYON", "SAC A MAIN", "PORTEFEUILLE",
    "CLE USB", "LUNETTES", "SOUS VERRE", "PARAPLUIE", "POUBELLE", "BALAI",
    "ASPIRATEUR", "BROSSE A CHAUSSURE", "BOUTEILLE D EAU", "CADENAS", "SERRURE", "CUISINE",
    "EVIER", "MIROIR DE MAQUILLAGE", "BOITE AUX LETTRES", "TELECOMMANDE", "CADENAS", "ECHELLE",
    "RADIO", "CASQUE", "SAC A DOS"
];

const movies = [
    "AVATAR", "TITANIC", "MATRIX", "INCEPTION", "JURASSIC PARK", "GLADIATOR",
    "LA REINE DES NEIGES", "MEMENTO", "LES DENTS DE LA MER", "BRAVEHEART", "INTERSTELLAR", "GRAVITY",
    "SEVEN", "PULP FICTION", "SCARFACE", "SHREK", "SUPERMAN", "ZODIAC",
    "LES GOONIES", "PREDATOR", "DIE HARD", "ALIENS", "SCREAM", "PSYCHOSE",
    "TRANSFORMERS", "GODZILLA", "AMADEUS", "HANNIBAL", "MYSTIC RIVER", "WOLVERINE",
    "ROCKY", "JUMANJI", "ZOOLANDER", "CASINO ROYAL", "TWISTER", "APOCALYPTO",
    "TRON", "APOCALYPSE NOW", "TWILIGHT", "ALIEN", "GREASE", "ERAGON", "ROBOCOP",
    "SHUTTER ISLAND", "BEETLE JUICE", "HALLOWEEN", "JOKER", "GLORY" 
];

// Tableaux des images du pendu

const hangmanImages = [
    "src/images/hangman-1.png", "src/images/hangman-2.png", "src/images/hangman-3.png",
    "src/images/hangman-4.png", "src/images/hangman-5.png", "src/images/hangman-6.png",
    "src/images/hangman-7.png", "src/images/hangman-8.png", "src/images/hangman-9.png",
    "src/images/hangman-10.png"
];
let rulesModal = document.querySelector(".rules__modal");
let btnRules = document.querySelector(".text__menu-rules");
let themeModal = document.querySelector(".theme__modal");
let btnTheme = document.querySelector(".text__menu-theme");
let btnReload = document.querySelector(".text__menu-reload");

let btnChoiceAnimals = document.querySelector(".theme__choice--animals");
let btnChoicePays = document.querySelector(".theme__choice--pays");
let btnChoiceFruitsAndVegetables = document.querySelector(".theme__choice--fruitsAndVegetables");
let btnChoiceEverydayObjects = document.querySelector(".theme__choice--everydayObjects");
let btnChoiceMovies = document.querySelector(".theme__choice--movies");

let textFindWord = document.querySelector(".text__menu-findWord");
let textWordToFind = document.querySelector(".text__wordToFind");
let textChoiceTheme = document.querySelector(".text__theme");
let letters = document.querySelectorAll(".letter");
let alphabet = document.querySelector(".text__alphabet");
let hangmanImage = document.querySelector(".hangman__image");

let choiceStartTheme = textChoiceTheme;
let chosenLetter;
let chosenTheme;
let wordToGuess;
let wordToDisplay = [];
let wordDiscovered;
let life = 0;
let soundPen = new Audio("src/sounds/pen.mp3");
let soundWin = new Audio("src/sounds/victory.wav");
let soundLose = new Audio("src/sounds/lose.mp3");

// Fonctions du jeu
function underscoreAndSpace() {
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] != " ") {
            textWordToFind.textContent += "_";
        } else if (wordToGuess[i] === " ") {
            textWordToFind.textContent += " ";
        }else {
            wordToDisplay[i] = wordToGuess[i];
        }
    }
}

function randomWord() {
    wordToGuess = chosenTheme[Math.floor(Math.random() * chosenTheme.length)];
    wordToDisplay = wordToGuess.split("");
    underscoreAndSpace();
    btnTheme.style.display = "none";
    themeModal.style.display = "none";
    btnRules.style.display = "block";
    textFindWord.style.display = "block";
    btnReload.style.display = "block";
    btnRules.style.display = "none";
}

function checkLetter() {
    let foundLetter = false;
    for (let i = 0; i < wordToGuess.length; i++) {
        if (chosenLetter === wordToGuess[i]) {
            textWordToFind.textContent = textWordToFind.textContent.substring(0, i) + chosenLetter + textWordToFind.textContent.substring(i + 1);
            wordToDisplay[i] = chosenLetter;
            foundLetter = true;
            soundPen.play();
        } else if (textWordToFind.textContent === wordToGuess) {
            win();
        }
    }
    if (!foundLetter) {
        life++;
        switch (life) {
            case 1:
                hangmanImage.style.background = "url('src/images/hangman-2.png') no-repeat";
                soundPen.play();
                break;
            case 2:
                hangmanImage.style.background = "url('src/images/hangman-4.png') no-repeat";
                soundPen.play();
                break;
            case 3:
                hangmanImage.style.background = "url('src/images/hangman-5.png') no-repeat";
                soundPen.play();
                break;
            case 4:
                hangmanImage.style.background = "url('src/images/hangman-6.png') no-repeat";
                soundPen.play();
                break;
            case 5:
                hangmanImage.style.background = "url('src/images/hangman-7.png') no-repeat";
                soundPen.play();
                break;
            case 6:
                hangmanImage.style.background = "url('src/images/hangman-8.png') no-repeat";
                soundPen.play();
                break;
            case 7:
                hangmanImage.style.background = "url('src/images/hangman-9.png') no-repeat";
                soundPen.play();
                break;
            case 8:                
                lose();
                break;
            default:
                break;
        }        
        console.log(life);
    }
}

function lose() {
    alphabet.style.display = "none";
    textFindWord.style.display = "none";
    textChoiceTheme.textContent = "Vous avez perdu !";
    hangmanImage.style.background = "url('src/images/hangman-10.png') no-repeat";
    soundLose.play();
    textChoiceTheme.style.top = "15.6%";
    textWordToFind.style.top = "68%";
    textWordToFind.style.fontSize = "2.5em";
    textWordToFind.style.textTransform = "none";
    textWordToFind.textContent = "Le mot était : " + wordToGuess;
    setTimeout(() => {
        location.reload();
    }, 10000);
}

function win() {
    alphabet.style.display = "none";
    textFindWord.style.display = "none";
    textChoiceTheme.textContent = "Vous avez gagné !";
    hangmanImage.style.background = "url('src/images/hangman-11.png') no-repeat";
    soundWin.play();
    textChoiceTheme.style.top = "15.6%";
    textWordToFind.style.top = "68%";
    textWordToFind.style.fontSize = "2.5em";
    textWordToFind.style.textTransform = "none";
    textWordToFind.textContent = "Le mot est bien : " + wordToGuess;
    setTimeout(() => {
        location.reload();
    }, 10000);
}

// Choix du thème de départ
choiceStartTheme.textContent = "Choisissez un thème dans la marge.";

// Ouverture ou fermeture des modals
btnRules.addEventListener("click", () => {
    if (rulesModal.style.display === "block") {
        rulesModal.style.display = "none";
        btnTheme.style.display = "block";
        
    }else {
        rulesModal.style.display = "block";
        btnTheme.style.display = "none";
        textFindWord.style.display = "none";
        btnReload.style.display = "none";
    }
});

btnTheme.addEventListener("click", () => {
    if (themeModal.style.display === "block") {
        themeModal.style.display = "none";
        btnRules.style.display = "block";
        
    } else {
        themeModal.style.display = "block";
        btnRules.style.display = "none";
        textFindWord.style.display = "none";
        btnReload.style.display = "none";
    }
});

btnReload.addEventListener("click", () => {
    location.reload();
});

// Choix de lettre
letters.forEach((letter) => {
    letter.addEventListener("click", () => {
        chosenLetter = letter.outerText;
        checkLetter();
        if (chosenLetter === letter.outerText) {
            letter.style.color = "transparent";
            letter.style.cursor = "default";
        }
    });
});

// bouton : mot trouvé ?
textFindWord.addEventListener("click", () => {
    wordDiscovered = prompt("Quel est le mot à deviner ?").toUpperCase();
    if (wordDiscovered === wordToGuess) {
        win();
    } else if (wordDiscovered === null || wordDiscovered === "") {
        alert("Vous devez entrer un mot.");
    }else {
        alert("Le mot n'est pas correct.");
        checkLetter();
    }
    return wordDiscovered.split("");
});

// Choix du thème
btnChoiceAnimals.addEventListener("click", () => {
    textChoiceTheme.textContent = "";
    textChoiceTheme.textContent = "Thème choisi : Animaux";
    chosenTheme = animals;
    randomWord();
    console.log(wordToGuess);
});

btnChoicePays.addEventListener("click", () => {
    textChoiceTheme.textContent = "";
    textChoiceTheme.textContent = "Thème choisi : Pays";
    chosenTheme = countries;
    randomWord();
});

btnChoiceFruitsAndVegetables.addEventListener("click", () => {
    textChoiceTheme.textContent = "";
    textChoiceTheme.textContent = "Thème choisi : Fruits et légumes";
    chosenTheme = fruitsAndVegetables;
    randomWord();
});

btnChoiceEverydayObjects.addEventListener("click", () => {
    textChoiceTheme.textContent = "";
    textChoiceTheme.textContent = "Thème choisi : Objets du quotidien";
    chosenTheme = everydayObjects;
    randomWord();
});

btnChoiceMovies.addEventListener("click", () => {
    textChoiceTheme.textContent = "";
    textChoiceTheme.textContent = "Thème choisi : Films";
    chosenTheme = movies;
    randomWord();
});

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
// Récupérer la langue du navigateur
const browserLanguage = navigator.language;

// Constantes pour les langues
const languages = {
  fr: 'fr',
  en: 'en',
};

// Constantes pour les textes
const texts = {
  headTitle: {
    'fr' : 'Calculateur Wakfu',
    'en' : 'Wakfu Calculator',
  },
  bodyTitle: {
    'fr' : 'Calculateur de dégât pour Wakfu',
    'en': 'Wakfu Damage calculator for Wakfu',
  },
  languageButton: {
    'fr' : 'English',
    'en': 'Français',
  }
};


// Verifier si la langue du navigateur est française ou anglaise, si ce n'est pas le cas, mettre en anglais.
let currentLanguage = languages[browserLanguage] || languages.en;

// Récupération de la balise <button> pour forcer le changement de langue
const toggleLanguageButton = document.querySelector('#toggle-language');

// Fonction de changement de langue
function updateLanguage() {
  // Récupération des éléments DOM
  const headTitle = document.querySelector('title');
  const bodyTitle = document.querySelector('#calculator-page-title');
  const languageButton = document.querySelector('button');

  // Vérifier l'existence puis modifier mes textes en fonction de la langue en cours
  if (headTitle && bodyTitle && languageButton) {
    document.documentElement.lang = currentLanguage;
    headTitle.textContent = texts.headTitle[currentLanguage];
    bodyTitle.textContent = texts.bodyTitle[currentLanguage];
    languageButton.innerHTML = texts.languageButton[currentLanguage];
    console.log(bodyTitle.textContent)
  }
}

// Fonction pour forcer un changement de langue grâce au bouton
function toggleLanguage() {
  currentLanguage = (currentLanguage === languages.fr) ? languages.en : languages.fr;
  deleteForm();
  updateLanguage();
  createForm();
}

// Verifier l'existence du bouton de changement de langue puis l'associer à l'evenement de changement de langue au clic
if (toggleLanguageButton) {
  toggleLanguageButton.addEventListener("click",  toggleLanguage);
}

// Mettre à jour la langue au chargement de la page
updateLanguage();


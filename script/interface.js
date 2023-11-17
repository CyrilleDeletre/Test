// Liste des stats que l'utilisateur va pouvoir rentrer.
const userStats = [
    { name: 'damageInflicted', engLabel: "Damage Inflicted", frLabel: "Dommages infligés" },
    { name: 'fireMastery', engLabel: "Fire Mastery", frLabel: "Maîtrise Feu" },
    { name: 'waterMastery', engLabel: "Water Mastery", frLabel: "Maîtrise Eau" },
    { name: 'earthMastery', engLabel: "Earth Mastery", frLabel: "Maîtrise Terre" },
    { name: 'airMastery', engLabel: "Air Mastery", frLabel: "Maîtrise Air" },
    { name: 'meleeMastery', engLabel: "Melee Mastery", frLabel: "Maîtrise Mêlée" },
    { name: 'distanceMastery', engLabel: "Distance Mastery", frLabel: "Maîtrise Distance" },
    { name: 'criticalMastery', engLabel: "Critical Mastery", frLabel: "Maîtrise Critique" },
    { name: 'criticalHits', engLabel: "Critical Hits", frLabel: "Coup Critique" },
    { name: 'backMastery', engLabel: "Back Mastery", frLabel: "MaîtriseDos" },
    { name: 'berserkMastery', engLabel: "Berserk Mastery", frLabel: "Maîtrise Berserk" },
    { name: 'healMastery', engLabel: "Heal Mastery", frLabel: "Maîtrise Soin" },
];

// Récupération de la balise form pour intégrer les labels et les inputs.
const userStatsForm = document.querySelector('#userStats');

function createForm() {
     // Création du bouton submit.
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';

    // Liste des champs de saisies créer pour que l'utilisateur rentre ses stats.
    userStats.forEach(userStat => 
        {
            // Création des éléments.
            let userStatLabel, userStatInput;

            // Création des éléments de label et input en fonction de la langue.
            if (currentLanguage === 'fr') {
               // Création des labels français
               userStatLabel = document.createElement('label');
               userStatLabel.innerText = userStat.frLabel;

               // Création des inputs français
               userStatInput = document.createElement('input');
               userStatInput.type = 'number';
               userStatInput.id = userStat.name;
               userStatInput.placeholder = `Entrer votre ${userStat.frLabel}`;
            } 

            else{
            // création des labels anglais
            userStatLabel = document.createElement('label');
            userStatLabel.innerText = userStat.engLabel;
                
            // création des inputs anglais
            userStatInput = document.createElement('input');
            userStatInput.type = 'number';
            userStatInput.id = userStat.name;
            userStatInput.placeholder = `Enter your ${userStat.engLabel}`;
                
            // Nommage du bouton submit en anglais
            submitButton.value = "Send stats"
            }

            // Ajout des labels et inputs dans le Form
            userStatsForm.appendChild(userStatLabel);
            userStatsForm.appendChild(userStatInput);
        }
    )

    // Condition pour déterminer la valeur du bouton en fonction de la langue
    if (currentLanguage === 'fr') {
        submitButton.value = "Envoyer les stats";
    }

    else {
        submitButton.value = "Send stats";
    }

    // Ajout du bouton submit à la fin
    userStatsForm.appendChild(submitButton);
}

// Supprimer le formulaire
function deleteForm() {
    userStatsForm.innerHTML = '';
}

createForm();
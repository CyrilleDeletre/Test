// classes.js
document.addEventListener("DOMContentLoaded", function () {

    // Fonction pour afficher chaque classe
    function displayClasses(classes) {
        // Chercher les informations pour chaque classe
        classes.forEach(classe => {
            // Création d'une section pour chaque classe
            const classesSection = document.createElement("section");
            classesSection.className = "classes-section";

            // Afficher le nom de la classe (bouton)
            const classButton = document.createElement("button");

            // Utilisez une fonction anonyme pour passer la référence à la classe et ses sorts
            classButton.addEventListener('click', function () {
                toggleClassInfo(classe, classesSection);
            });

            // Ajouter la classe "class-image" au bouton et définir l'image de fond
            classButton.classList.add("class-image");
            classButton.style.backgroundImage = `url(${classe.image})`;

            classesSection.appendChild(classButton);

            document.querySelector("#classes-container").appendChild(classesSection);
        });
    }

    // Fonction pour afficher ou cacher les sorts et la description d'une classe
    function toggleClassInfo(classe, section) {
        // Récupérer le conteneur de description de la classe
        const descriptionContainer = section.querySelector(".description-container");

        // Vérifier si la description est déjà affichée
        const isDescriptionVisible = descriptionContainer !== null;

        // Afficher ou cacher la description en fonction de l'état actuel
        if (isDescriptionVisible) {
            // Si la description est visible, la cacher et supprimer le contenu
            section.removeChild(descriptionContainer);
        } else {
            // Si la description n'est pas visible, la générer
            // Créer le conteneur de description
            const newDescriptionContainer = document.createElement("div");
            newDescriptionContainer.className = "description-container";
            section.appendChild(newDescriptionContainer);

            // Afficher la description de la classe
            displayDescription(newDescriptionContainer, classe.description[currentLanguage]);

            // Afficher les sorts de la classe
            displaySpells(newDescriptionContainer, classe.spells);
        }
    }

    // Fonction pour afficher les sorts
    function displaySpells(container, spells) {
        const spellsListContainer = document.createElement('div');
        spellsListContainer.className = 'spells-list';
        container.appendChild(spellsListContainer);

        spells.forEach((spell) => {
            // Créer une div pour chaque sort
            const spellsDiv = document.createElement('div');

            // Ajouter la classe "spell-image" à la div et définir l'image de fond
            spellsDiv.classList.add("spell-image");
            spellsDiv.style.backgroundImage = `url(${spell.image})`;

            spellsListContainer.appendChild(spellsDiv)
        });
    }

    // Fonction pour afficher la description
    function displayDescription(container, description) {
        const descriptionElement = document.createElement("p");
        descriptionElement.className = "class-description";
        descriptionElement.textContent = description;
        container.appendChild(descriptionElement);
    }

    // Utilisation de fetch pour récupérer le JSON
    fetch("../json/classes.json")
        .then(response => response.json())
        .then(data => {
            const classesData = data.classes;
            displayClasses(classesData);
        })
        .catch(error => console.error('Erreur de chargement JSON :', error));
});




    // // a revoir
    // // Fonction pour récupérer les valeurs des stats de l'utilisateur.
    // function getUserValues(userValues) {
    //     // On créer les variables récupérées de l'utilisateurs.
    //     let {
    //         damageInflicted,
    //         fireMastery,
    //         waterMastery,
    //         earthMastery,
    //         airMastery,
    //         meleeMastery,
    //         distanceMastery,
    //         criticalMastery,
    //         criticalHitsPercentage,
    //         backMastery,
    //         berserkMastery,
    //         healMastery
    //     } = userValues;

    //     // On retourne ces valeurs pour les utiliser hors de la fonction.
    //     return {
    //         damageInflicted,
    //         fireMastery,
    //         waterMastery,
    //         earthMastery,
    //         airMastery,
    //         meleeMastery,
    //         distanceMastery,
    //         criticalMastery,
    //         criticalHitsPercentage,
    //         backMastery,
    //         berserkMastery,
    //         healMastery,
    //     };
    // }

    // // Fonction pour récolter la value de l'utilisateur et les stocker
    // function userValues() {
    //     const userValues = {
    //         damageInflicted: parseFloat(document.querySelector('#damageInflicted').value),
    //         fireMastery: parseInt(document.querySelector('#fireMastery').value),
    //         waterMastery: parseInt(document.querySelector('#waterMastery').value),
    //         earthMastery: parseInt(document.querySelector('#earthMastery').value),
    //         airMastery: parseInt(document.querySelector('#airMastery').value),
    //         meleeMastery: parseInt(document.querySelector('#meleeMastery').value),
    //         distanceMastery: parseInt(document.querySelector('#distanceMastery').value),
    //         criticalMastery: parseInt(document.querySelector('#criticalMastery').value),
    //         criticalHitsPercentage: parseFloat(document.querySelector('#criticalHitsPercentage').value),
    //         backMastery: parseInt(document.querySelector('#backMastery').value),
    //         berserkMastery: parseInt(document.querySelector('#berserkMastery').value),
    //         healMastery: parseInt(document.querySelector('#healMastery').value),
    //     };
    // }

    // function displaySpells(classData) {
    //     // Afficher les sorts des classes
    //     const spellsContainer = document.createElement("section");
    //     spellsContainer.className = "spells-container";
    //     classData.classesInfos.spells.forEach(spell => {
    //         console.log("spell.AP:", spell.AP);
    //         const damagePerAP = (spell.AP !== undefined ? (spell.damage / spell.AP).toFixed(2) : '');

    //         let spellCost = '';

    //         // Si le AP est défini dans le json on l'attribut à spellCost
    //         if (spell.AP !== undefined) {
    //             spellCost += `${spell.AP} AP`;
    //         }

    //         // Si le MP est défini dans le json on l'attribut à spellCost
    //         if (spell.MP !== undefined) {
    //             spellCost += ` ${spell.MP} MP`;
    //         }

    //         // Si le WP est défini dans le json on l'attribut à spellCost
    //         if (spell.WP !== undefined) {
    //             spellCost += ` ${spell.WP} WP`;
    //         }

    //         // Définir quelle maîtrise élémentaire est utilisée par l'utilisateur pour chaque type de sort
    //         const elementalMastery = userValues[spell.type.fr + 'Mastery'] || 0;
    //         // console.log("what is dat", userValues[spell.type])

    //         // Calcul du dégâts en normal et en coup critique
    //         const totalDamage = spell.damage * (1 + (elementalMastery + userValues.healMastery + userValues.meleeMastery + userValues.distanceMastery + userValues.backMastery + userValues.berserkMastery) / 100) * (1 + (userValues.damageInflicted) / 100);
    //         const totalCriticalStrikeDamage = spell.criticalStrikeDamage * (1 + (elementalMastery + userValues.criticalMastery + userValues.healMastery + userValues.meleeMastery + userValues.distanceMastery + userValues.backMastery + userValues.berserkMastery) / 100) * (1 + (userValues.damageInflicted) / 100);

    //         // Calcul de la moyenne des dégâts en fonction des % de coup critique de l'utilisateur
    //         const averageDamage =
    //             (totalDamage * (1 - userValues.criticalHitsPercentage)) + // Dégâts non critique en fonction des % de chance de Coups Critiques
    //             (totalCriticalStrikeDamage * userValues.criticalHitsPercentage); // Dégâts en Coup Critique en fonction des % de chance des Coups Critiques

    //         // Création de chaque sort par classes
    //         const spells = document.createElement("article");
    //         spells.className = `type-${spell.type.en}`; // Permet de changer la couleur du background en fonction du type de l'élément
    //         spells.innerHTML = `
    //                                 <h3>${spell.name[currentLanguage]} - ${spellCost}</h3>
    //                                 <p>Damage: ${spell.damage}</p>
    //                                 <p>Damage per AP: ${damagePerAP}</p>
    //                                 <p>Average Damage: ${averageDamage.toFixed(2)}</p>
    //                             `;
    //         spellsContainer.appendChild(spells);
    //     });
            // // Ajout du conteneur des sorts dans la section de sa classe
        // classesSection.appendChild(spellsContainer);

        
        // // reparation temporaire :
        // const userValues = {
        //     damageInflicted : 100,
        //     fireMastery : 100,
        //     waterMastery : 100,
        //     earthMastery : 100,
        //     airMastery : 100,
        //     meleeMastery : 0,
        //     distanceMastery : 100,
        //     criticalMastery : 100,
        //     criticalHitsPercentage : 20/100,
        //     backMastery : 0,
        //     berserkMastery : 0,
        //     healMastery : 100,
        // }

// On va chercher notre json qui stocke les données des classes 
fetch("../json/classes.json")
    .then(response => response.json())
    .then(data => {
        // On stocke les informations du json dans classData
        const classData = data.classes;

        // Fonction pour récupérer les valeurs des stats de l'utilisateur.
        function getUserValues(userValues) {
            // On créer les variables récupérées de l'utilisateurs.
            let {
                damageInflicted,
                fireMastery,
                waterMastery,
                earthMastery,
                airMastery,
                meleeMastery,
                distanceMastery,
                criticalMastery,
                criticalHitsPercentage,
                backMastery,
                berserkMastery,
                healMastery
            } = userValues;

            // On retourne ces valeurs pour les utiliser hors de la fonction.
            return {
                damageInflicted,
                fireMastery,
                waterMastery,
                earthMastery,
                airMastery,
                meleeMastery,
                distanceMastery,
                criticalMastery,
                criticalHitsPercentage,
                backMastery,
                berserkMastery,
                healMastery,
            };
        }

        // Fonction pour récolter la value de l'utilisateur et les stocker
            function userValues() {
                const userValues = {
                    damageInflicted: parseFloat(document.querySelector('#damageInflicted').value),
                    fireMastery: parseInt(document.querySelector('#fireMastery').value),
                    waterMastery: parseInt(document.querySelector('#waterMastery').value),
                    earthMastery: parseInt(document.querySelector('#earthMastery').value),
                    airMastery: parseInt(document.querySelector('#airMastery').value),
                    meleeMastery: parseInt(document.querySelector('#meleeMastery').value),
                    distanceMastery: parseInt(document.querySelector('#distanceMastery').value),
                    criticalMastery: parseInt(document.querySelector('#criticalMastery').value),
                    criticalHitsPercentage: parseFloat(document.querySelector('#criticalHitsPercentage').value),
                    backMastery: parseInt(document.querySelector('#backMastery').value),
                    berserkMastery: parseInt(document.querySelector('#berserkMastery').value),
                    healMastery: parseInt(document.querySelector('#healMastery').value),
                };
            }

        // fonction pour afficher les sorts des classes
        function displaySpells(classData) {
            // Cherche pour chaque classes
            classData.forEach(classesInfos => {
                // Création d'une section pour chaque classe
                const classesSection = document.createElement("section");
                classesSection.className = "classes-section";

                // Afficher le nom des classes
                const classesName = document.createElement("h2");
                classesName.textContent = classesInfos.name;
                classesSection.appendChild(classesName);

                // Afficher les sorts des classes
                const spellsContainer = document.createElement("section");
                spellsContainer.className = "spells-container";
                classesInfos.spells.forEach(spell => {
                    const damagePerAP = (spell.AP ? (spell.damage / spell.AP).toFixed(2) : spell.damage.toFixed(0));

                    let spellCost = '';

                    // Si le AP est défini dans le json on l'attribut à spellCost
                    if (spell.AP !== undefined) {
                        spellCost += `${spell.AP} AP`;
                    }

                    // Si le MP est défini dans le json on l'attribut à spellCost
                    if (spell.MP !== undefined) {
                        spellCost += ` ${spell.MP} MP`;
                    }

                    // Si le WP est défini dans le json on l'attribut à spellCost
                    if (spell.WP !== undefined) {
                        spellCost += ` ${spell.WP} WP`;
                    }

                    // Définir quelle maîtrise élémentaire est utilisée par l'utilisateur pour chaque type de sort
                    const elementalMastery = userValues[spell.type + 'Mastery'] || 0;

                    // Calcul du dégâts en normal et en coup critique
                    const totalDamage = spell.damage * (1 + (elementalMastery + userValues.healMastery + userValues.meleeMastery + userValues.distanceMastery + userValues.backMastery + userValues.berserkMastery) / 100) * (1 + (userValues.damageInflicted) / 100);
                    const totalCriticalStrikeDamage = spell.criticalStrikeDamage * (1 + (elementalMastery + userValues.criticalMastery + userValues.healMastery + userValues.meleeMastery + userValues.distanceMastery + userValues.backMastery + userValues.berserkMastery) / 100) * (1 + (userValues.damageInflicted) / 100);

                    // Calcul de la moyenne des dégâts en fonction des % de coup critique de l'utilisateur
                    const averageDamage =
                        (totalDamage * (1 - userValues.criticalHitsPercentage)) + // Dégâts non critique en fonction des % de chance de Coups Critiques
                        (totalCriticalStrikeDamage * userValues.criticalHitsPercentage); // Dégâts en Coup Critique en fonction des % de chance des Coups Critiques

                    // Création de chaque sort par classes
                    const spells = document.createElement("article");
                    spells.className = `type-${spell.type}`; // Permet de changer la couleur du background en fonction du type de l'élément
                    spells.innerHTML = `
                                            <h3>${spell.name} - ${spellCost}</h3>
                                            <p>Damage: ${spell.damage}</p>
                                            <p>Damage per AP: ${damagePerAP}</p>
                                            <p>Average Damage: ${averageDamage.toFixed(2)}</p>
                                        `;
                    spellsContainer.appendChild(spells);
                });

                // Ajout du conteneur des sorts dans la section de sa classe
                classesSection.appendChild(spellsContainer);

                // Ajout de tout ça dans le container principal
                document.querySelector("#classes-container").appendChild(classesSection);
            });
        }

        displaySpells(classData)
    })
    .catch(error => console.error('Erreur de chargement JSON :', error));

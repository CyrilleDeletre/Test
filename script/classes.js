// On va chercher notre json qui stocke les données des classes 
fetch("../json/classes.json")
    .then(response => response.json())
    .then(data => {
        // On stocke les informations du json dans classData
        const classData = data.classes;

        // Fonction pour calculer ??
        // function calculate(userValues) {
        //     // On créer les variables récupérées de l'utilisateurs
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
                const spellsContainer = document.createElement("div");
                spellsContainer.className = "spells-container";
                classesInfos.spells.forEach(spell => {
                    const damagePerAP = (spell.AP ? (spell.damage / spell.AP).toFixed(2) : spell.damage.toFixed(0));

                    let spellCost = '';

                    // Si le spellCost est défini dans le json on l'attribut à spellCost
                    if (spell.AP !== undefined) {
                        spellCost += `${spell.AP} AP`;
                    }

                    // Add the MP value if present
                    if (spell.MP !== undefined) {
                        spellCost += ` ${spell.MP} MP`;
                    }

                    // Add the WP value if present
                    if (spell.WP !== undefined) {
                        spellCost += ` ${spell.WP} WP`;
                    }

                    // Use elemental mastery specific to the spell type
                    const usedMastery = userValues[spell.type + 'Mastery'] || 0;

                    // Calculate totalDamage
                    const totalDamage = spell.damage * (1 + (usedMastery + userValues.backMastery + userValues.berserkMastery) / 100);
                    const totalDamageCrit = totalDamage * 1.25;

                    // Add the average damage calculation
                    const averageDamage =
                        (totalDamage * (1 - userValues.criticalHitsPercentage)) + // If I don't crit
                        (totalDamageCrit * userValues.criticalHitsPercentage); // If I crit

                    // Declaration of spellElement before using it
                    const spellElement = document.createElement("section");
                    spellElement.className = `type-${spell.type}`; // Add the class corresponding to the element
                    spellElement.innerHTML = `<h3>${spell.name} - ${spellCost}</h3><p>Damage: ${spell.damage}</p><p>Damage per AP: ${damagePerAP}</p><p>Average Damage: ${averageDamage.toFixed(2)}</p>`;
                    spellsContainer.appendChild(spellElement);
                });

                // Add the spell container to the class
                classContainer.appendChild(spellsContainer);

                // Add the class to the document
                document.querySelector("#classesContainer").appendChild(classesSection);
            });
        }

        function calculateAndDisplay() {
            const userValues = {
                damageInflicted: parseFloat(document.getElementById('damageInflicted').value),
                fireMastery: parseInt(document.getElementById('fireMastery').value),
                waterMastery: parseInt(document.getElementById('waterMastery').value),
                earthMastery: parseInt(document.getElementById('earthMastery').value),
                airMastery: parseInt(document.getElementById('airMastery').value),
                meleeMastery: parseInt(document.getElementById('meleeMastery').value),
                distanceMastery: parseInt(document.getElementById('distanceMastery').value),
                criticalMastery: parseInt(document.getElementById('criticalMastery').value),
                criticalHitsPercentage: parseFloat(document.getElementById('criticalHitsPercentage').value),
                backMastery: parseInt(document.getElementById('backMastery').value),
                berserkMastery: parseInt(document.getElementById('berserkMastery').value),
                healMastery: parseInt(document.getElementById('healMastery').value),
            };

            const calculatedValues = calculate(userValues);

            // Appel de la fonction d'affichage des sorts
            displaySpells(classData, calculatedValues);
        }

        // Appel de la fonction calculateAndDisplay lorsque l'utilisateur clique sur le bouton
        document.getElementById('calculateButton').addEventListener('click', calculateAndDisplay);
    })
    .catch(error => console.error('Erreur de chargement JSON :', error));

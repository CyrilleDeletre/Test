// function register() {
//     // Collecte des statistiques principales
//     const pv = document.getElementById('pv').value;
//     const pa = document.getElementById('pa').value;
//     const pm = document.getElementById('pm').value;
//     const pw = document.getElementById('pw').value;

//     // Collecte de la maîtrise élémentaire
//     const maitriseEau = document.getElementById('maitriseEau').value;
//     const maitriseFeu = document.getElementById('maitriseFeu').value;
//     const maitriseAir = document.getElementById('maitriseAir').value;
//     const maitriseTerre = document.getElementById('maitriseTerre').value;

//     // Collecte des statistiques de combat
//     const dommagesInfliges = document.getElementById('dommagesInfliges').value;
//     const coupCritique = document.getElementById('coupCritique').value;
//     const initiative = document.getElementById('initiative').value;
//     const esquive = document.getElementById('esquive').value;
//     const sagesse = document.getElementById('sagesse').value;
//     const controle = document.getElementById('controle').value;
//     const soinsRealises = document.getElementById('soinsRealises').value;
//     const parade = document.getElementById('parade').value;
//     const portee = document.getElementById('portee').value;
//     const tacle = document.getElementById('tacle').value;
//     const prospection = document.getElementById('prospection').value;
//     const volonte = document.getElementById('volonte').value;

//     // Collecte des statistiques secondaires
//     const maitriseCritique = document.getElementById('maitriseCritique').value;
//     const maitriseDos = document.getElementById('maitriseDos').value;
//     const maitriseMelee = document.getElementById('maitriseMelee').value;
//     const maitriseDistance = document.getElementById('maitriseDistance').value;
//     const maitriseSoin = document.getElementById('maitriseSoin').value;
//     const maitriseBerserk = document.getElementById('maitriseBerserk').value;
//     const resistanceCritique = document.getElementById('resistanceCritique').value;
//     const resistanceDos = document.getElementById('resistanceDos').value;
//     const armureDonnee = document.getElementById('armureDonnee').value;
//     const armureRecue = document.getElementById('armureRecue').value;
//     const dommagesIndirects = document.getElementById('dommagesIndirects').value;

//     const positionCible = document.querySelector('input[name="position"]:checked').value;
//     console.log('Position par rapport à la cible:', positionCible);

//     // Ajoutez ici la logique de traitement ou de stockage des données
//     console.log('Statistiques principales:', { pv, pa, pm, pw });
//     console.log('Maîtrise élémentaire:', { maitriseEau, maitriseFeu, maitriseAir, maitriseTerre });
//     console.log('Statistiques de Combat:', { dommagesInfliges, coupCritique, initiative, esquive, sagesse, controle, soinsRealises, parade, portee, tacle, prospection, volonte });
//     console.log('Statistiques Secondaires:', { maitriseCritique, maitriseDos, maitriseMelee, maitriseDistance, maitriseSoin, maitriseBerserk, resistanceCritique, resistanceDos, armureDonnee, armureRecue, dommagesIndirects });
    
  
//     // Vous pouvez ajouter ici la logique pour effectuer les calculs
//     // ou envoyer les données à votre backend, selon vos besoins.
// }

// function showProfileForm() {
//     document.getElementById('profilZone').style.display = 'block';
// }

// addEventListener(onclick, register)
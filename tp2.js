// =====================================================
// TP2 – Manipulation d'une liste d'étudiants (MEVN)
// =====================================================


// ==============================
// Exercice 1 – Déclaration
// ==============================

// Création du tableau etudiants
const etudiants = [
  { id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12 },
  { id: 2, nom: "Rabe", filiere: "IG", moyenne: 9 },
  { id: 3, nom: "Rasoa", filiere: "SI", moyenne: 15 },
  { id: 4, nom: "Andry", filiere: "RT", moyenne: 11 }
];

console.log("=== Liste des noms des étudiants ===");
etudiants.forEach(etudiant => {
  console.log(etudiant.nom);
});

console.log("\n=== Nom et moyenne (avec destructuration) ===");
etudiants.forEach(({ nom, moyenne }) => {
  console.log(`${nom} : ${moyenne}`);
});


// ==============================
// Exercice 2 – map() et filter()
// ==============================

// 1. Étudiants ayant une moyenne ≥ 10
const admis = etudiants.filter(e => e.moyenne >= 10);

console.log("\n=== Étudiants admis (moyenne ≥ 10) ===");
console.log(admis);

const noms = etudiants.map(e => e.nom);

console.log("\n=== Tableau des noms ===");
console.log(noms);

const etudiantsMaj = etudiants.map(e => ({
  ...e,
  moyenne: e.moyenne + 1
}));

console.log("\n=== Moyennes +1 (nouveau tableau) ===");
console.log(etudiantsMaj);


// ==============================
// Exercice 3 – Fonction fléchée
// ==============================

// Fonction fléchée pour afficher un étudiant
const afficherEtudiant = (etudiant) => {
  console.log(
    `L’étudiant ${etudiant.nom} de la filière ${etudiant.filiere} a une moyenne de ${etudiant.moyenne}`
  );
};

console.log("\n=== Affichage avec fonction fléchée ===");
etudiants.forEach(etudiant => afficherEtudiant(etudiant));


// ==============================
// Exercice 4 – Async / Await
// ==============================

function chargerEtudiants() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve(etudiants);
    }, 2000);
  });
}

async function afficherListeEtudiants() {
  try {
    console.log("\nChargement des étudiants...");

    const liste = await chargerEtudiants();

    console.log("Liste chargée :");
    liste.forEach(e => {
      console.log(`- ${e.nom} (${e.filiere}) : ${e.moyenne}`);
    });

  } catch (erreur) {
    console.log("Erreur :", erreur);
  }
}

afficherListeEtudiants();


// ==============================
// Exercice 5 – reduce()
// ==============================

// Calcul de la moyenne générale
const moyenneGenerale =
  etudiants.reduce((total, e) => total + e.moyenne, 0)
  / etudiants.length;

console.log("\n=== Moyenne générale de la classe ===");
console.log(`Moyenne générale : ${moyenneGenerale}`);

// 1. Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre de noms.

let numbersOfName = NaN;

do {
    numbersOfName = parseInt(prompt('Veuillez choisir un nombre de noms.'));
} while (isNaN(Number(numbersOfName)) || numbersOfName <= 0);

// 2. Utilisez une boucle pour demander à l'utilisateur de saisir chaque nom. Les noms saisis doivent être stockés dans un tableau.

const names = [];

for (let i = 0; i < numbersOfName; i++) {
    names.push(prompt('Veuillez entrer un nouveau nom.'));
}

// 3. Concaténez plusieurs chaînes de caractères pour construire un message de confirmation contenant le nombre de noms saisis et la liste de ces noms.
// 3.1 Si le nombre de noms est supérieur à 3, ajoutez une info supplémentaire au message (par exemple : "C'est beaucoup de noms !").

let resultString = `Vous avez séléctionné ${numbersOfName} noms, ce sont les suivants : ${names.join(', ')}.`;

if (numbersOfName > 3) {
    resultString += '\nC\'est beaucoup de noms.'
}

// 4. Affichez le message de confirmation dans la console.

console.log(resultString);

// 5. Écrivez une fonction qui prend en paramètre un tableau de noms et qui affiche chacun de ces noms dans la console.

// fonction -> paramètre : tableau -> affiche les noms dans un clg
function showNames(namesTable) {
    for (let i = 0; i < namesTable.length; i++) {
        console.log(namesTable[i]);        
    }
}

// 6.Appelez la fonction avec le tableau de noms en argument.
showNames(names);


//////////////////////////////////////////////////////////////////Exercice 2///////////////////////////////////////////////////////

//Ecrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10. Si l'utilisateur saisit un nombre qui n'est pas compris dans cet intervalle, le programme doit afficher un message d'erreur et redemander à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre valide.

// prompt -> number entre 1 et 10 compris.

let number = NaN;

do {
    number = parseInt(prompt('Veuillez renseigner un nombre.'));
} while (isNaN(Number(number)) || number < 1 || number > 10);

// 2. Utilisez une boucle for pour afficher la table de multiplication du nombre saisi. Par exemple, si l'utilisateur saisit 5, le programme doit afficher :

// ```
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50
// ```

for (let i = 1; i <= 10; i++) {
    // 5 x 10 = 50
    console.log(`${number} x ${i} = ${number * i}`)
}

// 3. Écrivez une fonction qui prend en paramètre un entier et affiche sa table de multiplication de 1 à 10.

function tableDeMultiplication(param) {
    console.log("Fonction tableDeMultiplication");
    for (let i = 1; i <= 10; i++) {
        // 5 x 10 = 50
        console.log(`${param} x ${i} = ${param * i}`)
    }
}

// 4. Appelez la fonction avec le nombre saisi par l'utilisateur en argument.
tableDeMultiplication(number);
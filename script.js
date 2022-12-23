// Consignes :

//     Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre de noms.
//     Utilisez une boucle pour demander à l'utilisateur de saisir chaque nom. Les noms saisis doivent être stockés dans un tableau.
//     Concaténez plusieurs chaînes de caractères pour construire un message de confirmation contenant le nombre de noms saisis et la liste de ces noms. Si le nombre de noms est supérieur à 3, ajoutez une info supplémentaire au message (par exemple : "C'est beaucoup de noms !").
//     Affichez le message de confirmation dans la console.
//     Écrivez une fonction qui prend en paramètre un tableau de noms et qui affiche chacun de ces noms dans la console.
//     Appelez la fonction avec le tableau de noms en argument.

function prenom(){
    //variables utilisés
    let tableau = [];
    let count = prompt("Saisis un nombre de nom");

    // boucle for pour répéter l'action autant de fois que la variable count
    for(i = 0; i < count; i++){
        //à chaque entrée de valeurs(par rapport a count) --> elle s'ajoute dans la variable tableau
        tableau.push(prompt('Donnes les noms'));
        console.log(tableau);
    }
    // si la valeur de count est plus superieur ou égale à 3 --> on attend en reponse les noms + C'est beaucoup de noms !
    if (count >= 3){
        alert(`${tableau}. C'est beaucoup de noms !`)
    // sinon --> on attend en reponse les noms + C'est pas beaucoup !
    } else {
        alert(`${tableau}. C'est pas beaucoup !`)
    }

    return tableau
}

console.log(prenom)

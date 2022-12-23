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
    let count = prompt("Saisie un nombre de nom");

    // boucle for pour répéter l'action autant de fois que la variable count
    for(i = 0; i < count; i++){
        //à chaque entrée de valeurs(par rapport a count) --> elle s'ajoute dans la variable tableau
        tableau.push(prompt('Donnes les noms'));
        console.log(tableau);
    }
    // si la valeur de count est plus superieur ou égale à 3 --> on attend en reponse les noms + C'est beaucoup de noms !
    if (count >= 3){
        alert(`les noms que tu as choisi sont :${tableau}. C'est beaucoup de noms !`)
    // sinon --> on attend en reponse les noms + C'est pas beaucoup !
    } else {
        alert(`les noms que tu as choisi sont :${tableau}. C'est pas beaucoup !`)
    }

    return tableau
}

prenom();


// Consignes :

// Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10. 

//Si l'utilisateur saisit un nombre qui n'est pas compris dans cet intervalle, le programme doit afficher un message d'erreur et redemander à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre valide.

//Utilisez une boucle for pour afficher la table de multiplication du nombre saisi. Par exemple, si l'utilisateur saisit 5, le programme doit afficher

function multiplication(){
 //Pour la premiere condition   
 let a = prompt('met un chiffre entier entre 1 et 10 !')
 for(i = 1; i <= 10; i++)
    if(a > 10){
        a = prompt("la valeur n'est pas comprise entre 1 et 10, recommence");
    } else if(a != Number.isInteger(a)){
        a = prompt("la valeur n'est pas un entier, recommence");
    }
    console.log(a)

 //Pour la premiere condition   
 let b = prompt('met un autre chiffre entier entre 1 et 10 !')
 for(i = 1; i <= 10; i++)
    if(b > 10){
        b = prompt("la valeur n'est pas comprise entre 1 et 10, recommence");
    } else if(b != Number.isInteger(b)){
        b = prompt("la valeur n'est pas un entier, recommence");
    }
    console.log(b)

 //La multiplication
 result = a * b
 //affichage du resultat
 alert(`${a} Multiplier par ${b} est égale à ${result}`) 
 
return multiplication();
}

multiplication();
//Définition de variables
let nom = "John";
console.log(nom);

nom = "Jane";
console.log(nom);

//Boucles
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//console.log()
console.log("Bonjour tout le monde!");
console.log(3 + 4);
console.log(`${nom}`);

//Concaténation de chaînes de caractères
let firstName = "John";
let lastName = "Doe";

console.log(`${firstName} ${lastName}`);
console.log(firstName + " " + lastName);

//Conditions
let age = 30;

if(age >= 18){
    console.log("Vous êtes majeur");
} else {
    console.log("Vous êtes mineur");
}


//Avancé

//Création et parcours d'un tableau
let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];

for(i = 0; i < couleurs.length; i++){
    console.log(couleurs[i]);
}

//Utilisation de Array.push() et Array.pop()
let numbers = [1,2,3,4,5];

numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);

//Fonction 1
function pair(a){
    if(a % 2 === 0){
        return true
    } else {
        return false
    }
}

console.log(pair(4))
console.log(pair(7))

//Fonction 2
function somme(numbers){
    let result = 0
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i]
    }
    return result;
}

let array = [5,5,5,5,5]
console.log(somme(array))

//Fonction 3
function reverseString(str){
   let split = str.split("")
   let reversed = split.reverse()
   let joined = reversed.join("")

   return joined
}

console.log(reverseString("bonjour copain"))
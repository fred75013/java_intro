//Calculer la factorielle en utilisant la boucle for:
//for([initialisation]; [condition]; [incrémentation]) { };

let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(nbr) {
  f = 1;
  for (var i = 1; i <= nbr; i++) {
    //Pour variable i = 1, tant que i inferieur ou egal au nbr, increment i
    f = f * i; // ou f *= i;
  }
  return f;
}
console.log(fact(nbr));

//Calculer la factorielle en utilisant la récursivité
/*
let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(nbr) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (nbr === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return nbr * fact(nbr-1);
}
console.log(fact(3));

*/

nbr = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);
brique = "";
vide = " ";
for (let i = 1; i <= nbr; i++) {
  space = nbr - i;
  brique += "#";
  console.log(vide.repeat(space) + brique);
}

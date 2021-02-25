/* pour s'adresser au bot, un fenêtre de prompt va s'ouvrir. L'utilisateur pourra y saisir sa phrase et le bot répondra via une impression en console.
Les règles de conversations du bot sont les suivantes (rangées par priorité - si deux règles sont vraies, seule la plus haute dans la liste s'applique) :
Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." */

let user = prompt("Parle avec moi");
if (user.includes("?") === true) {
  console.log("Ouais ouais...");
} else if (user === "") {
  console.log("t'es en pls ? ");
} else if (user === user.toUpperCase()) {
  console.log("Eh OH calmate ");
} else if (user.includes("Fornite") || user.includes("fornite")) {
  console.log("on s' fait une partie soum-soum ?");
} else {
  console.log("Balek");
}

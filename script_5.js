const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

console.log(
  "Est-ce que tous les livres ont été au moins empruntés une fois ? : "
);
books.forEach((booksContent) => {
  if (booksContent.rented > 0) {
    console.log("Oui tout les livres ont été au moins empruntés une fois");
  }
});

//Quel est livre le plus emprunté ?
//Quel est le livre le moins emprunté ?

books.sort(function (a, b) {
  if (a.rented < b.rented) {
    return -1;
  }
  if (a.rented > b.rented) {
    return 1;
  }
  return 0;
});

console.log("Le livre le moins emprunté est : ");
console.log(books[0]);

console.log("Le livre le plus emprunté est : ");
console.log(books[books.length - 1]);

console.log("Trouve le livre avec l'ID: 873495");

//console.log(books.find((book) => book.id == 873495));

//ou cette technique

for (let booksAttribut in books) {
  if (books[booksAttribut].id === 873495) {
    console.log(books[booksAttribut]);
  }
}

console.log("Supprime le livre avec l'ID: 133712 :");

for (let i in books) {
  if (books[i].id === 133712) {
    books.splice(i, 1);
  }
}
console.log(books);
console.log("en le recherchant avec un code il ne le trouve plus :");
console.log(books.find((book) => book.id == 133712));

console.log(
  "Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)."
);

console.log(
  books.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  })
);

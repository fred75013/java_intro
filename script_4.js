const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

/*Filtre dans cette liste les entrepreneurs 
qui sont nés dans les années 70 ;*/
console.log("Voici tout les entrepreneurs qui sont nés dans les année 70 : ");
entrepreneurs.forEach((entrepreneursContent) => {
  if (entrepreneursContent.year >= 1970 && entrepreneursContent.year < 1980) {
    console.log(entrepreneursContent);
  }
});

/*Sors une array qui contient le prénom 
et le nom des entrepreneurs ;*/
console.log(
  "Voici un array qui contient le prenom et le nom des entrepreneurs : "
);

let arr = [];
entrepreneurs.forEach((entrepreneursContent) => {
  arr.push(entrepreneursContent.first + " " + entrepreneursContent.last);
});
console.log(arr);

//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("L'age des inventeur aujourd'hui : ");

entrepreneurs.forEach((entrepreneursContent) => {
  console.log(
    `${entrepreneursContent.first} ${entrepreneursContent.last} aura ${
      2021 - entrepreneursContent.year
    } ans aujourd'hui`
  );
});

/*Trie les entrepreneurs par ordre alphabétique 
du nom de famille.*/
console.log(
  "Trie des entrepreneurs par ordre alphabétique du nom de famille : "
);

console.log("Les entrepreneurs par ordre alphabétique du nom de famille:");
console.log(
  entrepreneurs.sort(function (a, b) {
    if (a.last < b.last) {
      return -1;
    }
    if (a.last > b.last) {
      return 1;
    }
    return 0;
  })
);

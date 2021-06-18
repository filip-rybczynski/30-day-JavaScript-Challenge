import "../scss/modules/band-name-sort.scss";

const list = document.querySelector("#bands");

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

console.log(
  "Day 17 log: Initially I found an overly complicated way to do it, but was reminded of how a useful tool regular expressions are and how they can be helpful in scenarios like this one 😛"
);

// // MY INITIAL SOLUTION

// const articles = ["A ", "An ", "The "];

// let bandNames = bands.map((band) => {
//   let article = articles.find((art) => band.indexOf(art) === 0);

//   if (article) {
//     band = band.slice(article.length);
//   } else {
//     article = "";
//   }

//   return {
//     article,
//     band,
//   };
// });

// bandNames.sort((a, b) => {
//   if (a.band < b.band) return -1;
//   if (a.band > b.band) return 1;
//   return 0;
// });

// list.innerHTML = bandNames
//   .map((name) => `<li>${name.article}${name.band}</li>`)
//   .join("");

//Much simpler solution

function removeArticle(string) {
 const noArt = string.replace(/^(a |an |the )/i,'');
  return noArt;
}

bands.sort((a,b) => removeArticle(a) > removeArticle(b) ? 1 : -1 );



list.innerHTML = bands
  .map(band => `<li>${band}</li>`)
  .join("");

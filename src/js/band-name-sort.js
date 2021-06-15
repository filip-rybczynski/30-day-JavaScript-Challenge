import '../scss/modules/band-name-sort.scss';

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

const articles = ['A ', 'An ', 'The '];

let bandNames = bands.map(band => {
  let article = articles.find(art => band.indexOf(art) === 0);

  if(article) {
    band = band.slice(article.length);
  } else {
    article = '';
  }

  return {
    article,
    band
  }

})

bandNames.sort((a, b) => {
 if(a.band < b.band) return -1;
 if(a.band > b.band) return 1;
 return 0;
});

console.log(bandNames);

list.innerHTML = bandNames.map(name => `<li>${name.article}${name.band}</li>`).join('');
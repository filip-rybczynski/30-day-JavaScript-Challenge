import "../scss/city-search.scss";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities1 = [];

const cities = [];

fetch(endpoint) // returns a "promise"
  .then((blob) => blob.json()) // returns another "promise"
  .then((data) => cities.push(...data));

// // SAME RESULT AS
// fetch(endpoint)
// .then(blob => blob.json())
// .then(data => data.forEach(city => {
//     cities1.push(city)}));

function findMatches(wordToMatch, cities) {
  console.log("working");
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

const input = document.querySelector(".search--js");
const resultList = document.querySelector(".results--js");

function changeDisplay() {
  if (this.value.length < 1) {
    resultList.innerHTML = "<li>Filter for a city</li><li>or a state</li>";
  } else {
    const match = this.value;

    const results = findMatches(match, cities);

    resultList.innerHTML = "";

    const matchRegExp = new RegExp(match, "gi");

    const html = results
      .map((result) => {
        const cityName = result.city.replace(
          matchRegExp,
          '<span class="hl">$&</span>'
        );
        const stateName = result.state.replace(
          matchRegExp,
          '<span class="hl">$&</span>'
        );
        const popWithCommas = result.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return `<li><span>${cityName}, ${stateName}</span><span class="population">${popWithCommas}</span></li>`;
      })
      .join("");

    resultList.innerHTML = html || "<li>No results!</li><li>Try a different search</li>";
  }
}

input.addEventListener("change", changeDisplay);
input.addEventListener("keyup", changeDisplay);

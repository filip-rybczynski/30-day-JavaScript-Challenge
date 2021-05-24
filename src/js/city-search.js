import "../scss/city-search.scss";

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities1 = [];

const cities = [];

    fetch(endpoint)                 // returns a "promise"
    .then(blob => blob.json())  // returns another "promise"
    .then(data => cities.push(...data));

    // // SAME RESULT AS
    // fetch(endpoint)               
    // .then(blob => blob.json())  
    // .then(data => data.forEach(city => {
    //     cities1.push(city)}));

function findMatches(wordToMatch, cities) {
    console.log("working");
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

const input = document.querySelector(".search--js");
const resultList = document.querySelector(".results--js");

function changeDisplay() {
    const match = this.value;

    if (match.length <= 1) return;

    const results = findMatches(match, cities);

    resultList.innerHTML = '';

    results.forEach(result => {
        resultList.innerHTML += `<li><span>${result.city}, ${result.state}</span><span class="population">${result.population}</span></li>`
    });

    const matchRegExp = new RegExp(match, 'gi');

    resultList.innerHTML = resultList.innerHTML.replace(matchRegExp, '<span class="hl">$&</span>')

}

input.addEventListener("input", changeDisplay);

import axios from "axios";

const countryList = document.getElementById("countryWrapper");
const errorId = document.getElementById("error");

async function getListOfAllCountrys() {
  // const response = await fetch("https://restcountries.com/v2/all");
  let response;
  try {
    response = await axios.get("https://restcountries.com/v2/all");
  } catch (error) {}

  const oldData = [...response.data];

  const reformattedArray = oldData.map((value) => ({
    name: value.name,
    population: value.population,
    flag: value.flag,
    region: value.region,
  }));
  return reformattedArray;
}
async function sortArrayOnPopulation() {
  let arrayToSortByPopulation;
  try {
    arrayToSortByPopulation = await getListOfAllCountrys();
  } catch (error) {
    errorId.innerHTML += `<p>Something went wrong here </p>`;
  }

  arrayToSortByPopulation.sort((a, b) => {
    if (a.population > b.population) {
      return 1;
    } else if (a.population < b.population) {
      return -1;
    } else {
      return 0;
    }
  });

  return arrayToSortByPopulation;
}

async function addListToHtmlDocument() {
  const formattedData = await sortArrayOnPopulation();

  formattedData.forEach((country) => {
    console.log(country.flag);
    countryList.innerHTML += ` 
       <div class="countryItem ${country.region}">
 <div class="countryImg"> <img src=${country.flag}></img> </div>
     <div class="countryText ">
     <span> Country: ${country.name}  </span>
     
     <span>Population: ${country.population}</span></div>
            </div>
   
      `;
  });
}

addListToHtmlDocument();

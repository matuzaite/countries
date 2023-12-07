import { displayCountries } from "./display.js";

const url = "https://restcountries.com/v3.1/";
const countryList = document.querySelector(".country-cards-container");

const fetchSingleCountry = async () => {
  countryList.innerHTML = "";

  const name = document.querySelector("#search-country");
  const response = await fetch(url + "name/" + name.value);
  const json = await response.json();
  return json;
};

const generateSingleCountry = async () => {
  const data = await fetchSingleCountry();
  displayCountries(data);
};

export { generateSingleCountry };

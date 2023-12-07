import { displayCountries } from "./display.js";
const searchRegion = document.querySelector("#search-region");
const countryList = document.querySelector(".country-cards-container");
const url = "https://restcountries.com/v3.1/";

const getSelectedRegion = () => {
  const selectedOption = searchRegion.options[searchRegion.selectedIndex];
  return selectedOption.value;
};

const fetchByRegion = async () => {
  countryList.innerHTML = "";
  const response = await fetch(url + "region/" + getSelectedRegion());
  const json = await response.json();
  return json;
};

const generateCountryByRegion = async (region) => {
  const data = await fetchByRegion(region);
  displayCountries(data);
};

export { generateCountryByRegion, fetchByRegion, getSelectedRegion };

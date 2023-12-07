const url = "https://restcountries.com/v3.1/";
import { displayCountries, displayRegions } from "./display.js";

const fetchRegions = async () => {
  const response = await fetch(url + "all?fields=region"); //fetching options
  const json = await response.json();

  let regionCollection = new Set();

  json.forEach((json) => regionCollection.add(json.region));

  return [...regionCollection];
};

const fetchAllCountries = async () => {
  const response = await fetch(url + "all");
  const json = await response.json();
  return json;
};

const generateAllCountry = async () => {
  const data = await fetchAllCountries();
  const regionOptions = await fetchRegions();
  displayCountries(data);
  displayRegions(regionOptions);
};

export { fetchAllCountries, fetchRegions, generateAllCountry };

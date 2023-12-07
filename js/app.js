const searchCountryField = document.querySelector("#search-country");
const searchRegion = document.querySelector("#search-region");
const checkbox = document.getElementById("checkbox");

import { generateSingleCountry } from "./single.js";
import { generateAllCountry } from "./all.js";
import { generateCountryByRegion, getSelectedRegion } from "./region.js";

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

searchRegion.addEventListener("change", () =>
  generateCountryByRegion(getSelectedRegion())
);

searchCountryField.addEventListener("input", () => {
  if (searchCountryField.value === "") {
    generateAllCountry();
  } else {
    generateSingleCountry(searchCountryField.value.toLowerCase());
  }
});

window.addEventListener("onload", generateAllCountry());

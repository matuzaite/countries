const countryList = document.querySelector(".country-cards-container");
const searchRegion = document.querySelector("#search-region");

const displayCountries = (data) => {
  for (let country of data) {
    const countryCard = document.createElement("article");
    countryCard.className = "card";
    countryCard.innerHTML = `
              <img src=${country.flags.svg} alt="country-flag" />
              <h2>${country.name.common}</h2>
              <ul class="description">
                <li>Population: ${country.population}</li>
                <li>Region: ${country.region}</li>
                <li>Capital: ${country.capital}</li>
              </ul>
              `;
    countryList.appendChild(countryCard);
  }
};

const displayRegions = (regionCollection) => {
  let option = `<option class="region" value="" hidden>Region</option>`;
  for (let region of regionCollection) {
    option += `
        <option value=${region} class="region">${region}</option>
        `;
  }
  searchRegion.innerHTML = option;
};

export { displayCountries, displayRegions };

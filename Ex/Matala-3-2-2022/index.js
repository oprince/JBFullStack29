const allCountriesBtn = $("#all-countries");
const searchCountry = $("#search-country");
const tableHead = $(".table-header");
const regionsEl = $(".regions");
const form = $("form");

const CountryManager = {
  countries: [],
  regions: [],
  rendered: false,
  fetchAllCountries() {
    return $.ajax("https://restcountries.com/v3.1/all");
  },
  fetchCountryByName(countryName) {
    return $.ajax(`https://restcountries.com/v3.1/name/${countryName}`);
  },
  setCountries(countries) {
    this.countries = countries;
  },
  getCountries() {
    return this.countries;
  },
  getTotalPopulation() {
    const totalPopulation = this.countries.reduce((acc, country) => {
      return acc + country.population;
    }, 0);
    return totalPopulation;
  },
};

function render(country) {
  const tBodyCountries = $(".t-body-countries");
  const tRow = $(`
            <tr>
                <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="w-10 h-10 flex flex-shrink-0 mr-2 sm:mr-3 items-center justify-center">
                            <img
                                class="country-image"
                                src="${country.flags.png}"
                                width="40"
                                height="40"
                                alt=""
                            />
                        </div>
                        <div class="font-medium text-gray-800 country-name">
                            ${country.name.official}
                        </div>
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap country-population">
                    ${country.population?.toLocaleString()}
                </td>
            </tr>
        `);
  tBodyCountries.append(tRow);
}

function renderRegions() {
  const mappedRegions = CountryManager.getCountries().reduce(
    (prevObj, country) => {
      prevObj[country.region] = prevObj[country.region]
        ? prevObj[country.region] + 1
        : 1;
      return prevObj;
    },
    {}
  );
  Object.entries(mappedRegions).forEach(([key, value]) => {
    const tBodyRegions = $(".t-body-regions");
    const tRowRegions = $(`
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="font-medium text-gray-800 region-name">
                    ${key}
                </div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap region-countries">
                ${value}
            </td>
        </tr>
        `);
    tBodyRegions.append(tRowRegions);
  });
}

function renderPopulationInfo() {
  const averagePopulation =
    CountryManager.getTotalPopulation() / CountryManager.getCountries().length;
  const totalPopulation = CountryManager.getTotalPopulation();
  const populationInfo = $(".population-info");
  populationInfo.append(`
            <div class="text-gray-800">
            <p><strong>Average Population:</strong> ${averagePopulation.toLocaleString()}</p>
            <p><strong>Total Population:</strong> ${totalPopulation.toLocaleString()}</p>
            </div>
        `);
}

allCountriesBtn.click(() => {
  if (!CountryManager.rendered) {
    resetResult();
    $(".population-info").html(``);
    CountryManager.fetchAllCountries().then((countries) => {
      CountryManager.setCountries(countries);
      CountryManager.countries.forEach((country) => {
        render(country);
      });
    });
    CountryManager.rendered = true;
    const errorEl = $(".error");
    errorEl.hide();
  }
});

function searchOnKeyUp() {
  const countryName = searchCountry.val();
  $(".population-info").html(``);
  if (countryName === "") {
    CountryManager.rendered = false;
    allCountriesBtn.click();
  } else {
    CountryManager.fetchCountryByName(countryName).then((country) => {
      CountryManager.setCountries(country);
      country.forEach((country) => {
        render(country);
        regionsEl.show();
      });
      renderPopulationInfo();
      renderRegions(country);
      CountryManager.rendered = false;
    });
    const errorEl = $(".error");
    errorEl.hide();
  }
  resetResult();
}

searchCountry.on("keyup", _.debounce(searchOnKeyUp, 300));

function resetResult() {
  $(".t-body-countries").empty();
  $(".t-body-regions").empty();
  regionsEl.hide();
}

$("document").ready(() => {
  if (!CountryManager.countries.length) {
    tableHead.append(
      `<p class="error">
      Country list is currently empty,
      Please click on the button above to load the list of all countries.
      </p>`
    );
  }
  regionsEl.hide();

  form.submit(function (e) {
    e.preventDefault();
  });
});

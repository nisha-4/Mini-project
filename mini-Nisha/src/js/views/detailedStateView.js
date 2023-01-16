class DetailedState {
  _data;
  _populationNumber = document.querySelector(".population-number");
  _casesNumber = document.querySelector(".cases-number");
  _deathsNumber = document.querySelector(".deaths-number");
  _recoveredNumber = document.querySelector(".recovered-number");
  _deathsPerWeekNumber = document.querySelector(".deathsperweek-number");
  _infectionsPerWeekNumber = document.querySelector(
    ".infectionsperweek-number"
  );
  _incedenceWeekNumber = document.querySelector(".incidenceweek-number");
  _casesPer100kNumber = document.querySelector(".casesper100k-number");
  _deltaCasesNumber = document.querySelector(".deltacases-number");
  _deltaDeathsNumber = document.querySelector(".deltadeaths-number");
  _deltaRecoveredNumber = document.querySelector(".deltarecovered-number");

  renderStateData(data, city) {
    this._data = data;
    const numberFormatter = new Intl.NumberFormat();
    this._populationNumber.textContent = numberFormatter.format(
      data[city].population
    );
    this._casesNumber.textContent = numberFormatter.format(data[city].cases);
    this._deathsNumber.textContent = numberFormatter.format(data[city].deaths);
    this._recoveredNumber.textContent = numberFormatter.format(
      data[city].recovered
    );
    this._deathsPerWeekNumber.textContent = numberFormatter.format(
      data[city].deathsPerWeek
    );
    this._infectionsPerWeekNumber.textContent = numberFormatter.format(
      data[city].casesPerWeek
    );
    this._incedenceWeekNumber.textContent = numberFormatter.format(
      data[city].weekIncidence
    );
    this._casesPer100kNumber.textContent = numberFormatter.format(
      data[city].casesPer100k
    );
    this._deltaCasesNumber.textContent = numberFormatter.format(
      data[city].delta.cases
    );
    this._deltaDeathsNumber.textContent = numberFormatter.format(
      data[city].delta.deaths
    );
    this._deltaRecoveredNumber.textContent = numberFormatter.format(
      data[city].delta.recovered
    );
  }

  federalChange(callback) {
    const dropdown = document.querySelector("#citys");

    dropdown.addEventListener("change", e => {
      callback(dropdown.value);
    });
  }
}

export default new DetailedState();

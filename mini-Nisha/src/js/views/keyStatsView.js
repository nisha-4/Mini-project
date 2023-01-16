class CasesView {
  _numberCases = document.querySelector(".number-cases");
  _numberDeaths = document.querySelector(".number-deaths");
  _numberCases7 = document.querySelector(".number-newcases");
  _numberRecovered = document.querySelector(".number-recovered");
  _data;

  renderKeyStats(data) {
    const numberFormatter = new Intl.NumberFormat();
    this._data = data;
    this._numberCases.textContent = numberFormatter.format(this._data.cases);
    this._numberDeaths.textContent = numberFormatter.format(this._data.deaths);
    this._numberCases7.textContent = numberFormatter.format(
      this._data.casesPerWeek
    );
    this._numberRecovered.textContent = numberFormatter.format(
      this._data.recovered
    );
  }
}

export default new CasesView();

import Chart from "chart.js/auto";

class IncidenceView {
  _data;

  renderChart(data) {
    this._data = data;
    const incidenceBox = document
      .getElementById("incidenceChart")
      .getContext("2d");

    new Chart(incidenceBox, {
      type: "line",
      data: {
        labels: this._data.map(d =>
          d.date.replace(/T.*/, "").split("-").reverse().join(".").slice(0, 5)
        ),
        datasets: [
          {
            label: "Inzidenz",
            data: this._data.map(d => d.weekIncidence),
            backgroundColor: ["#e03131"],
            borderColor: ["#e03131"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
}

export default new IncidenceView();

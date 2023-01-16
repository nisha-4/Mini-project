import Chart from "chart.js/auto";

class VacView {
  _data;

  renderChart(data) {
    this._data = data;

    const vacBox = document.getElementById("vacChart").getContext("2d");

    const vacChart = new Chart(vacBox, {
      type: "bar",
      data: {
        labels: ["1. Impfung", "2. Impfung", "Booster"],
        datasets: [
          {
            label: "Impfungen",
            data: [
              this._data.vaccinated,
              this._data.secondVaccination.vaccinated,
              this._data.boosterVaccination.vaccinated,
            ],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(252, 196, 25, 0.2)",
              "rgba(130, 201, 30, 0.2)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(252, 196, 25, 1)",
              "rgba(130, 201, 30, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

export default new VacView();

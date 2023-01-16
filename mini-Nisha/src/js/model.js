import { AJAX } from "./helpers";

export const state = {
  keystats: {},
  stateStats: {},
  vacRateStats: {},
  incidenceStats: {},
  uniqueStateStats: {},
};

export const loadData = async function () {
  try {
    const data = await Promise.all([
      AJAX("https://api.corona-zahlen.org/germany"),
      AJAX("https://api.corona-zahlen.org/states"),
      AJAX("https://api.corona-zahlen.org/vaccinations"),
      AJAX("https://api.corona-zahlen.org/germany/history/incidence/7"),
    ]);

    state.keystats = data[0];
    state.stateStats = data[1].data;
    state.vacRateStats = data[2].data;
    state.incidenceStats = data[3].data;
  } catch (err) {
    console.error(`${err} 💥💥💥💥💥`);
  }
};

export const loadFederal = async function (federalstate) {
  try {
    const data = await AJAX(
      `https://api.corona-zahlen.org/states/${federalstate}`
    );
    state.uniqueStateStats = data.data;
  } catch (err) {
    console.error(`${err} 💥💥💥💥💥`);
  }
};

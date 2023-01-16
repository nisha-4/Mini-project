import Chart from "chart.js/auto";
import * as model from "./model";
import cases from "./views/keyStatsView";
import incedence from "./views/incidence7View";
import vaccinated from "./views/vacView";
import stateData from "./views/detailedStateView";
import { mobileNav } from "./helpers";

const loadRenderData = async function () {
  await model.loadData();
  cases.renderKeyStats(model.state.keystats);
  incedence.renderChart(model.state.incidenceStats);
  vaccinated.renderChart(model.state.vacRateStats);
};

const loadRenderFederal = async function (federalstate) {
  await model.loadFederal(federalstate);
  stateData.renderStateData(model.state.uniqueStateStats, federalstate);
};
mobileNav();
loadRenderData();
loadRenderFederal("NW");
stateData.federalChange(loadRenderFederal);

import * as utils from './utils';

const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;
  const currentlyInfectedImpact = reportedCases * 10;
  const currentlyInfectedSevere = reportedCases * 50;

  return {
    data,
    impact: {
      currentlyInfected: currentlyInfectedImpact,
      infectionsByRequestedTime: currentlyInfectedImpact * 2 ** utils.CalculateFactor(data)
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedSevere,
      infectionsByRequestedTime: currentlyInfectedSevere * 2 ** utils.CalculateFactor(data)
    }

  };
};

/* const data = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
    }

console.log(covid19ImpactEstimator(data)); */

export default covid19ImpactEstimator;

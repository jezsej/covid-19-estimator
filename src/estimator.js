import * as utils from './utils';

const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;
  const estimatedImpact = reportedCases * 10;
  const estimatedSevereImpact = reportedCases * 50;

  return {
    data,
    impact: {
      currentlyInfected: estimatedImpact,
      infectionsByRequestedTime: Math.ceil(estimatedImpact * 2 ** utils.CalculateFactor(data))
    },
    severeImpact: {
      currentlyInfected: estimatedSevereImpact,
      infectionsByRequestedTime: Math.ceil(estimatedSevereImpact * 2 ** utils.CalculateFactor(data))
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
    timeToElapse: 28,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
    }
console.log('******************');
console.log(CalculateFactor(data));
console.log('******************');
console.log(covid19ImpactEstimator(data));
console.log('******************'); */

export default covid19ImpactEstimator;

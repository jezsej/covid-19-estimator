import * as utils from './utils';

const covid19ImpactEstimator = (data) => {
  const { reportedCases, totalHospitalBeds } = data;
  const iCurrentlyInfected = reportedCases * 10;
  const sCurrentlyInfected = reportedCases * 50;
  const iInfectionsByRequestedTime = iCurrentlyInfected * (2 ** utils.CalculateFactor(data));
  const sInfectionsByRequestedTime = sCurrentlyInfected * (2 ** utils.CalculateFactor(data));
  const iSevereCasesByRequestedTime = Math.floor(0.15 * (iInfectionsByRequestedTime));
  const sSevereCasesByRequestedTime = Math.floor(0.15 * (sInfectionsByRequestedTime));
  const iAvailableBeds = Math.floor((0.35 * totalHospitalBeds)) - iSevereCasesByRequestedTime;
  const sAvailableBeds = Math.floor((0.35 * totalHospitalBeds)) - sSevereCasesByRequestedTime;

  return {
    data,
    impact: {
      currentlyInfected: iCurrentlyInfected,
      infectionsByRequestedTime: iInfectionsByRequestedTime,
      severeCasesByRequestedTime: iSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: iAvailableBeds
    },
    severeImpact: {
      currentlyInfected: sCurrentlyInfected,
      infectionsByRequestedTime: sInfectionsByRequestedTime,
      severeCasesByRequestedTime: sSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: sAvailableBeds
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
    timeToElapse: 77,
    reportedCases: 565,
    population: 66622705,
    totalHospitalBeds: 1380614
    }

const days = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 1,
      avgDailyIncomePopulation: 0.66
    },
    reportedCases: 565,
    population: 8704078,
    totalHospitalBeds: 221881,
    timeToElapse: 77,
    periodType: 'days'
  }

  const weeks =   {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 2,
      avgDailyIncomePopulation: 0.61
    },
    reportedCases: 2197,
    population: 9903751,
    totalHospitalBeds: 108367,
    timeToElapse: 12,
    periodType: 'weeks'
}

const months = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 1,
      avgDailyIncomePopulation: 0.56
    },
    reportedCases: 945,
    population: 8146773,
    totalHospitalBeds: 228482,
    timeToElapse: 2,
    periodType: 'months'
}

console.log('formatDuration ',formatDuration(data));
console.log('******************');
console.log('CalculateFactor ',CalculateFactor(data));
console.log('******************');
console.log(covid19ImpactEstimator(data));
console.log('******************'); */

export default covid19ImpactEstimator;

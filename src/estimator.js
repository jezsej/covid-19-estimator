import * as utils from './utils';

const covid19ImpactEstimator = (data) => {
  const { reportedCases, totalHospitalBeds } = data;
  const iCurrentlyInfected = reportedCases * 10;
  const sCurrentlyInfected = reportedCases * 50;
  const iInfectionsByRequestedTime = iCurrentlyInfected * (2 ** utils.CalculateFactor(data));
  const sInfectionsByRequestedTime = sCurrentlyInfected * (2 ** utils.CalculateFactor(data));
  const iSevereCasesByRequestedTime = Math.trunc(0.15 * (iInfectionsByRequestedTime));
  const sSevereCasesByRequestedTime = Math.trunc(0.15 * (sInfectionsByRequestedTime));
  const iAvailableBeds = Math.trunc((0.35 * totalHospitalBeds) - iSevereCasesByRequestedTime);
  const sAvailableBeds = Math.trunc((0.35 * totalHospitalBeds) - sSevereCasesByRequestedTime);
  const iCasesForICUByRequestedTime = Math.trunc(0.05 * iInfectionsByRequestedTime);
  const sCasesForICUByRequestedTime = Math.trunc(0.05 * iInfectionsByRequestedTime);
  const iCasesForVentilatorsByRequestedTime = Math.trunc(0.02 * iInfectionsByRequestedTime);
  const sCasesForVentilatorsByRequestedTime = Math.trunc(0.02 * iInfectionsByRequestedTime);
  const iDollarsInFlight = (iInfectionsByRequestedTime * 0.65 * 1.5) / 30;
  const sDollarsInFlight = (sInfectionsByRequestedTime * 0.65 * 1.5) / 30;

  return {
    data,
    impact: {
      currentlyInfected: iCurrentlyInfected,
      infectionsByRequestedTime: iInfectionsByRequestedTime,
      severeCasesByRequestedTime: iSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: iAvailableBeds,
      casesForICUByRequestedTime: iCasesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime: iCasesForVentilatorsByRequestedTime,
      dollarsInFlight: iDollarsInFlight
    },
    severeImpact: {
      currentlyInfected: sCurrentlyInfected,
      infectionsByRequestedTime: sInfectionsByRequestedTime,
      severeCasesByRequestedTime: sSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: sAvailableBeds,
      casesForICUByRequestedTime: sCasesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime: sCasesForVentilatorsByRequestedTime,
      dollarsInFlight: sDollarsInFlight
    }

  };
};

/* const data = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 3,
      avgDailyIncomePopulation: 0.66
    },
    reportedCases: 952,
    population: 5292512,
    totalHospitalBeds: 58722,
    timeToElapse: 3,
    periodType: 'months'
  }

console.log('******************');
console.log(covid19ImpactEstimator(data));
console.log('******************'); */

export default covid19ImpactEstimator;

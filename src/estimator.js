// import * as utils from './utils';

const formatWeeksToDays = (duration) => duration * 7;

const formatMonthsToWeeks = (duration) => duration * 4;

const formatMonthsToDays = (duration) => formatWeeksToDays(formatMonthsToWeeks(duration));

const formatDuration = (data) => {
  const { periodType } = data;
  const period = data.timeToElapse;

  switch (periodType) {
    case 'days': {
      return period;
    }

    case 'weeks': {
      return formatWeeksToDays(period);
    }

    case 'months': {
      const estimatedExtraDays = 2 * period;
      return formatMonthsToDays(period) + estimatedExtraDays;
    }

    default: {
      return period;
    }
  }
};

const CalculateFactor = (data) => {
  const days = formatDuration(data);
  return days / 3;
};

const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;
  const estimatedImpct = reportedCases * 10;
  const estimatedSevereImpct = reportedCases * 50;

  return {
    data,
    impact: {
      currentlyInfected: estimatedImpct,
      infectionsByRequestedTime: estimatedImpct * 2 ** CalculateFactor(data)
    },
    severeImpact: {
      currentlyInfected: estimatedSevereImpct,
      infectionsByRequestedTime: estimatedSevereImpct * 2 ** CalculateFactor(data)
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
    timeToElapse: 31,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
    }

console.log('formatDuration ',formatDuration(data));
console.log('******************');
console.log('CalculateFactor ',CalculateFactor(data));
console.log('******************');
console.log(covid19ImpactEstimator(data));
console.log('******************'); */

export default covid19ImpactEstimator;

// import * as utils from './utils';

const formatWeeksToDays = (duration) => duration * 7;

const formatMonthsToWeeks = (duration) => duration * 4;

const formatMonthsToDays = (duration) => formatWeeksToDays(formatMonthsToWeeks(duration));

const formatDuration = (data) => {
  console.log(data);
  const { periodType, timeToElapse } = data;

  switch (periodType) {
    case 'days': {
      console.log('periodType', periodType);
      console.log('timeToElapse', timeToElapse);
      return timeToElapse;
    }

    case 'weeks': {
      console.log('periodType', periodType);
      console.log('timeToElapse', timeToElapse);
      return formatWeeksToDays(timeToElapse);
    }

    case 'months': {
      console.log('periodType', periodType);
      console.log('timeToElapse', timeToElapse);
      const estimatedExtraDays = 2 * timeToElapse;
      return formatMonthsToDays(timeToElapse) + estimatedExtraDays;
    }
    default: {
      return timeToElapse;
    }
  }
};

const CalculateFactor = (data) => {
  const days = formatDuration(data);
  return Math.floor(days / 3);
};

const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;
  const iCurrentlyInfected = reportedCases * 10;
  const sCurrentlyInfected = reportedCases * 50;

  return {
    data,
    impact: {
      currentlyInfected: iCurrentlyInfected,
      infectionsByRequestedTime: iCurrentlyInfected * (2 ** CalculateFactor(data))
    },
    severeImpact: {
      currentlyInfected: sCurrentlyInfected,
      infectionsByRequestedTime: sCurrentlyInfected * (2 ** CalculateFactor(data))
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

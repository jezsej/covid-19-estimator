const formatWeeksToDays = (duration) => duration * 7;

const formatMonthsToWeeks = (duration) => duration * 4;

const formatMonthsToDays = (duration) => formatWeeksToDays(formatMonthsToWeeks(duration));

const formatDuration = (data) => {
  // console.log(data);
  const { periodType, timeToElapse } = data;

  switch (periodType) {
    case 'days': {
      // console.log('periodType', periodType);
      // console.log('timeToElapse', timeToElapse);
      return timeToElapse;
    }

    case 'weeks': {
      // console.log('periodType', periodType);
      // console.log('timeToElapse', timeToElapse);
      return formatWeeksToDays(timeToElapse);
    }

    case 'months': {
      // console.log('periodType', periodType);
      // console.log('timeToElapse', timeToElapse);
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


/* const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 7,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
console.log(formatDuration(data));
console.log('******************');
console.log(CalculateFactor(data));
console.log('******************'); */
export { formatDuration, CalculateFactor };

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
      return formatMonthsToDays(period) + 2 * period;
    }

    default: {
      return period;
    }
  }
};

const CalculateFactor = (data) => {
  const days = formatDuration(data);
  return Math.ceil(days / 3);
};

/* const data = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "months",
    timeToElapse: 3,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
    }
console.log(formatDuration(data));
console.log('******************');
console.log(CalculateFactor(data));
console.log('******************'); */
export { formatDuration, CalculateFactor };

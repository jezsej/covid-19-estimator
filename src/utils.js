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
      return formatMonthsToDays(period);
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


export { formatDuration, CalculateFactor };

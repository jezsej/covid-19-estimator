const formatWeeksToDays = (duration) => duration * 7;

const formatMonthsToWeeks = (duration) => duration * 4;

const formatMonthsToDays = (duration) => formatWeeksToDays(formatMonthsToWeeks(duration));

const formatDuration = (data) => {
    const periodType = data.periodType;
    const period = data.timeToElapse;

    switch (periodType) {
        case periodType === 'days':
            return period;
        case periodType === 'weeks':
            return formatWeeksToDays(period);
        case periodType === 'months':
            return formatMonthsToDays(period);
        default:
            return period;
    }
}

const CalculateFactor = (data) => {
    const days = formatDuration(data);
    return days / 3;
}


export { formatDuration, CalculateFactor };
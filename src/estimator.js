const covid19ImpactEstimator = (data) => {

    const reportedCases = data.reportedCases;
    const currentlyInfected_Impact = reportedCases * 10;
    const currentlyInfected_Severe = reportedCases * 50;

    return {
        data: data,
        impact: {
            currentlyInfected: currentlyInfected_Impact,
            infectionsByRequestedTime: currentlyInfected_Impact * 1024
        },
        severeImpact: {
            currentlyInfected: currentlyInfected_Severe,
            infectionsByRequestedTime: currentlyInfected_Severe * 1024
        }

    }
};

/*const data = {
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

console.log(covid19ImpactEstimator(data));*/

export default covid19ImpactEstimator;

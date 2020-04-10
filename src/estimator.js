
//import * as utils from './utils.js';

const covid19ImpactEstimator = (data) => {
    
    let reportedCases = data.reportedCases;

    let currentlyInfected_impact = reportedCases * 10;
    let currentlyInfected_severe = reportedCases * 50;

    return {
        data : data,
        impact: {
            currentlyInfected : currentlyInfected_impact,
            infectionsByRequestedTime: currentlyInfected_impact * 1024
        },
        severeImpact: {
            currentlyInfected : currentlyInfected_severe,
            infectionsByRequestedTime: currentlyInfected_severe * 1024
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

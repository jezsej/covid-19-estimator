// import * as estimator from '../../src/estimator.js';
// const estimator = require('../../src/estimator.js');

const processData = () => {
  const data = {
    population: document.getElementById('population').value,
    timeToElapse: document.getElementById('timeToElapse').value,
    reportedCases: document.getElementById('reportedCases').value,
    totalHospitalBeds: document.getElementById('totalHospitalBeds').value,
    periodType: document.getElementById('periodType').value
  };

  console.log('input ', data);
};

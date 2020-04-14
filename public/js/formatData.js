import * as estimator from '../../src/estimator';
import '../css/bootstrap.css';
// const estimator = require('../../src/estimator');

const handleData = () => {
  const data = {
    population: document.getElementById('population').value,
    timeToElapse: document.getElementById('timeToElapse').value,
    reportedCases: document.getElementById('reportedCases').value,
    totalHospitalBeds: document.getElementById('totalHospitalBeds').value,
    periodType: document.getElementById('periodType').value
  };

  console.log('input ', data);
  console.log('output', estimator.default(data));
};

if (!Window.handleData) {
  Window.handleData = handleData;
} else {
  console.warn('handleData is already assigned!');
}

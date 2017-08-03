import {replace, when, verify} from '../../test-helper';

describe.only('tests months', () => {

  it('shows the infrastructure works', () => {
    true.should.be.true('This is my custom diagnostic message');
  });

  it('tests prior month', () => {
    const months = require('./months');

    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    const priorMonth = {year: year, month: month};

    let priorMonthTestData = months.prior();

    priorMonthTestData.should.deepEqual(priorMonth);

  });

  it('tests current month', () => {
    const months = require('./months');

    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    const currentMonth = {year: year, month: month};

    let currentMonthTestData = months.current();

    currentMonthTestData.should.deepEqual(currentMonth);

  });
});

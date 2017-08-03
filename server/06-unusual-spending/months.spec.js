import {replace, when, verify} from '../../test-helper';

describe.only('tests months', () => {

  it('shows the infrastructure works', () => {
    true.should.be.true('This is my custom diagnostic message');
  });

  it('tests prior month', () => {
    const months = require('./months');

    const priorMonth = {year: 2017, month: 7};

    let priorMonthTestData = months.prior();

    priorMonthTestData.should.deepEqual(priorMonth);

  });

  it('tests current month', () => {
    const months = require('./months');

    const currentMonth = {year: 2017, month: 8};

    let currentMonthTestData = months.current();

    currentMonthTestData.should.deepEqual(currentMonth);

  });
});

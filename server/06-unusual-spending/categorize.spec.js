import {replace, when, verify} from '../../test-helper';

describe.only('tests categorize', () => {

  it('shows the infrastructure works', () => {
    true.should.be.true('This is my custom diagnostic message');
  });

  it('tests categorize', () => {
    const categorize = require('./categorize').categorize;

    const priorMonth = {year: 2017, month: 7};
    const currentMonth = {year: 2017, month: 8};
    const priorPayments = [{amount: 780, category: 'basketball'}, {amount: 290, category: 'bicycling'}];
    const currentPayments = [{amount: 270, category: 'golf'}, {amount: 190, category: 'chess'}];

    let payments = [
              {month: currentMonth, payments: currentPayments},
              {month: priorMonth, payments: priorPayments}
            ];

    let categorizedPayments = categorize(payments);

    let paymentTest = [];
    paymentTest.push({amount: 780, category: 'basketball'});
    paymentTest.push({amount: 290, category: 'bicycling'});
    paymentTest.push({amount: 190, category: 'chess'});
    paymentTest.push({amount: 270, category: 'golf'});

    categorizedPayments.should.deepEqual(paymentTest);

  });

});

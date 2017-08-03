import {replace, when, verify} from '../../test-helper';

describe.only('fetch payments', () => {

  it('shows the infrastructure works', () => {
    true.should.be.true('This is my custom diagnostic message');
  });

  it('orchestrates fetch, months and api', () => {
    const months = replace('./months');
    const api = replace('./api').api;


    const userId = 'user-id';
    const priorMonth = {year: 2017, month: 7};
    const currentMonth = {year: 2017, month: 8};
    const priorPayments = [{amount: 780, category: 'basketball'}, {amount: 290, category: 'bicycling'}];
    const currentPayments = [{amount: 270, category: 'golf'}, {amount: 190, category: 'chess'}];

    let fetch;

    when(months.prior()).thenReturn(priorMonth);
    when(months.current()).thenReturn(currentMonth);

    when(api(userId, priorMonth)).thenReturn(priorPayments);
    when(api(userId, currentMonth)).thenReturn(currentPayments);

    fetch = require('./fetch').fetch;

    let payments = fetch(userId);

    //payments.should.deepEqual(currentPayments.concat(priorPayments));
    // console.log(payments);
    let paymentTest = [
          {month: currentMonth, payments: currentPayments},
          {month: priorMonth, payments: priorPayments}
        ];
    console.log(paymentTest);
    payments.should.deepEqual(paymentTest);
  });
});

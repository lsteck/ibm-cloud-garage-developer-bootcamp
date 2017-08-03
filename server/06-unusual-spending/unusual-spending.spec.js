import {replace, when, verify} from '../../test-helper';

describe.only('unusual spending', () => {

  it('shows the infrastructure works', () => {
    true.should.be.true('This is my custom diagnostic message');
  });

  it('orchestrates fetch, categorize and email', () => {
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;
    const userId = {};
    const payments = [];
    const categorizedPayments = () => {};

    let unusualSpending;

    when(fetch(userId)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    unusualSpending = require('./unusual-spending').unusualSpending;

    unusualSpending(userId);

    verify(email(userId, categorizedPayments));

  });


});

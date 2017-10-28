import {replace, when, verify} from '../../test-helper';

describe.only('the canary spec for unusual spending', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('unusual spending', () => {
    it('successfully orchestrates fetch, categorize and email', () => {
      const fetch = replace('./fetch').fetch;
      const categorize = replace('./categorize').categorize;
      const email = replace('./email').email;

      const userId = {dummy: 'userId'};
      const payments = {dummy: 'payments'};
      const categorizedPayments = {dummy: 'categorizedPayments'};

      when(fetch(userId)).thenReturn(payments);
      when(categorize(payments)).thenReturn(categorizedPayments);

      let unusualSpending = require('./unusual-spending').unusualSpending;

      unusualSpending(userId);
      verify(email(userId, categorizedPayments));
    });
  } );

});

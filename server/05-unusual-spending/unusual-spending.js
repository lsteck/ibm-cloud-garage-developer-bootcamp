import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

let unusualSpending = (userId) => {
  const payments = fetch(userId);
  const categorizedPayments = categorize(payments);
  email(userId, categorizedPayments);
};

export {unusualSpending};

import * as months from './months';
import {api} from './api';

const fetch = (userId) => {
  let priorMonth = months.prior();
  let currentMonth = months.current();
  let priorMonthPayments = api(userId, priorMonth);
  let currentMonthPayments = api(userId, currentMonth);
  let payments = [];
  payments.push({month: currentMonth, payments: currentMonthPayments});
  payments.push({month: priorMonth, payments: priorMonthPayments});
  return payments;
  //return currentMonthPayments.concat(priorMonthPayments);
};

export {fetch};

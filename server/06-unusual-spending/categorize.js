const categorize = (paymentsbyMonth) => {
  let allPayments = [];
  paymentsbyMonth.forEach( (monthPayments) => {
    allPayments = allPayments.concat(monthPayments.payments);
  });
  return allPayments.sort((a, b) => {return a.category.localeCompare(b.category)});
};

export {categorize};

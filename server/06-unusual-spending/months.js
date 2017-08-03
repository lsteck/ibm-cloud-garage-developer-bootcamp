
const prior = () => {
  // return {year: 2017, month: 7};
  let returnMonth = {};
  var date = new Date();
  var month = date.getMonth();
  var year = date.getFullYear();
  // returnMonth.year = year;
  // returnMonth.month = month;
  // return returnMonth;
  return {'year': year, 'month': month};
};

const current = () => {
  //return {year: 2017, month: 8};
  let returnMonth = {};
  var date = new Date();
  var month = date.getMonth();
  var year = date.getFullYear();
  returnMonth['year'] = year;
  returnMonth['month'] = month + 1;
  return returnMonth;
};

export {prior, current};

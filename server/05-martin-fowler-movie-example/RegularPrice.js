import {Movie} from './Movie';

let RegularPrice = () => {

  const getPriceCode = () => Movie.REGULAR;

  const getCharge = (daysRented) => {
    let result = 2;
    if (daysRented > 2) {
      result += (daysRented - 2) * 1.5;
    }
    return result;
  };

  const getFrequentRenterPoints = () => {
    return 1;
  };

  return {
    getPriceCode,
    getCharge,
    getFrequentRenterPoints
  };
};

export {RegularPrice};

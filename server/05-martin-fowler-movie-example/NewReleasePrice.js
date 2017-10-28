import {Movie} from './Movie';

let NewReleasePrice = () => {

  const getPriceCode = () => Movie.NEW_RELEASE;

  const getCharge = (daysRented) => {
    return daysRented * 3;
  };

  const getFrequentRenterPoints = daysRented => {
    return daysRented > 1 ? 2 : 1;
  };


  return {
    getPriceCode,
    getCharge,
    getFrequentRenterPoints
  };
};

export {NewReleasePrice};

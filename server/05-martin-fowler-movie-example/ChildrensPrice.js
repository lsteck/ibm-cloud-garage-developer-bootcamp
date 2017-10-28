import {Movie} from './Movie';

let ChildrensPrice = () => {

  const getPriceCode = () => Movie.CHILDRENS;

  const getCharge = (daysRented) => {
    let result = 1.5;
    if (daysRented > 3) {
      result += (daysRented - 3) * 1.5;
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

export {ChildrensPrice};

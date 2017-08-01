import {CHILDRENS, NEW_RELEASE, REGULAR} from "./movie-codes";

const moviePriceCodes = {
  REGULAR: (daysRented) => {
    let total = 2;
    if(daysRented > 2) {
      total += (daysRented - 2) * 1.5;
    }
    return total;
  },
  NEW_RELEASE: (daysRented) => {
    return daysRented * 3;
  },
  CHILDRENS: (daysRented) => {
    let total = 1.5;
    if(daysRented > 3) {
      total += (daysRented - 3) * 1.5;
    }
    return total;
  }
};


const movieFrequentRenterPoints = {
  NEW_RELEASE: (daysRented) => {
    if (daysRented > 1) return 2;
    return 1;
  }
};

let makeMovieFrom = (title, somePriceCode) => {
  let priceCode = somePriceCode;

  return {
    get title() { return title; },
    get priceCode() { return priceCode; },
    set priceCode(code) { priceCode = code; },
    getFrequentRenterPoints(daysRented){
      // add bonus for a two day new release rental
      const renterPoints = movieFrequentRenterPoints[priceCode];
      if(renterPoints) return renterPoints(daysRented);
      return 1;
    },
    getCharge(daysRented){
      let total = 0;
      //noinspection Eslint
      const moviePrice = moviePriceCodes[priceCode];
      if(moviePrice){
        total += moviePrice(daysRented);
      }
      return total;
    }
  };
};

export {makeMovieFrom};

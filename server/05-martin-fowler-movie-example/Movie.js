import {RegularPrice} from './RegularPrice';
import {ChildrensPrice} from './ChildrensPrice';
import {NewReleasePrice} from './NewReleasePrice';

const REGULAR = 0;
const NEW_RELEASE = 1;
const CHILDRENS = 2;

let Movie = (title, somePriceCode) => {
  let price;

  const setPriceCode = (aPriceCode) => {
    switch (aPriceCode) {
      case REGULAR:
        price = RegularPrice();
        break;

      case NEW_RELEASE:
        price = NewReleasePrice();
        break;

      case CHILDRENS:
        price = ChildrensPrice();
        break;
      default:

    }

  };
  setPriceCode(somePriceCode);

  const getCharge = (daysRented) => {
    //noinspection Eslint
    return price.getCharge(daysRented);
  };

  const getFrequentRenterPoints = daysRented => {
    return price.getFrequentRenterPoints(daysRented);
  };

  return {
    get title() { return title; },
    get priceCode() { return price.getPriceCode(); },
    getCharge,
    getFrequentRenterPoints
  };
};
Movie.REGULAR = REGULAR;
Movie.NEW_RELEASE = NEW_RELEASE;
Movie.CHILDRENS = CHILDRENS;

export {Movie};

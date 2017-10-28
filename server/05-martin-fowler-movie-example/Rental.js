let Rental = (movie, daysRented) => {

  function getFrequentRenterPoints() {
    return movie.getFrequentRenterPoints(daysRented);
  }

  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getFrequentRenterPoints,
    getCharge: function () {
      return movie.getCharge(daysRented);
    }
  };
};

export {Rental};

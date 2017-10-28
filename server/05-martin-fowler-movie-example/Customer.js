
let Customer = (name) => {
  let rentals = [];

  const getTotalCharge = () => {
    let result = 0;
    for (let i = 0; i < rentals.length; i++) {
      result += rentals[i].getCharge();
    }
    return result;
  };

  const getTotalFrequentRenterPoints = () => {
    let result = 0;
    for (let i = 0; i < rentals.length; i++) {
      result += rentals[i].getFrequentRenterPoints();
    }
    return result;
  };

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },
    statement() {
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
        let rental = rentals[i];

        //show figures for this rental
        statement += '\t' + rental.movie.title + '\t' + rental.getCharge() + '\n';

      }

      //add footer lines
      statement += 'Amount owed is ' + getTotalCharge() + '\n';
      statement += 'You earned ' + getTotalFrequentRenterPoints() +
          ' frequent renter points';

      return statement;
    }
  };
};

export {Customer};

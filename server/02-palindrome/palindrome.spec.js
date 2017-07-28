describe.only('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function isPalindrome(phrase){
    if (phrase.trim().length === 0){
      return false;
    } else {
      return phrase === phrase.split('').reverse().join('');
    }
  }

  describe('a palindrome', () => {
    it('is racecar', () => {
      isPalindrome('racecar').should.be.true();
    });

    it('is not larry', () => {
      isPalindrome('larry').should.be.false();
    });

    it('is not race car', () => {
      isPalindrome('race car').should.be.false();
    });

    it('is not "   "', () => {
      isPalindrome('     ').should.be.false();
        });
    it('is not ""', () => {
      isPalindrome('').should.be.false();
    });

    it('is "mom dad mom"', () => {
      isPalindrome('mom dad mom').should.be.true();
    });
  });
});

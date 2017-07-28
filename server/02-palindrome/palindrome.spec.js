describe.only('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function isPalindrome(){
    return true;
  }

  describe('a palindrome', () => {
    it('is racecar', () => {
      isPalindrome('racecar').should.be.true();
    });
    it('is not larry');
    it('is not race car');
    it('is not "   "');
    it('is not ""');
    it('is "mom dad mom"');
  });
});

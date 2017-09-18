describe('the palindrome canary spec', () => {
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
  describe('palindrome behaves in the following way', () => {
    it('radar is a palindrome', () => {
       isPalindrome('radar').should.be.true();
    });

    it('racecar is a palindrome', );
    it('dog is not a palindrome');
    it('"mom dad mom" is a palindrome');
    it('"race car" is a palindrome');
    it('"  " is not a palindrome');
    it('"" is not a palindrome');
  });
});

describe.only('the fahrenheit-2-celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let fahrenheit2celsius = () => 0;

  describe('fahrenheit-2-celsius behaves in the following way', () => {
    it('fahrenheit2celsius(32) equals 0', () => {
      fahrenheit2celsius(32).should.equal(0);
    });
    it('fahrenheit2celsius(50) equals 10');
  });
});

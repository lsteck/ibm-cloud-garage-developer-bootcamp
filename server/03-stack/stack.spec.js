describe.only('the stack spec', () => {

  let stack = {
    isEmpty: () => true
  };

  it('starts empty');
   it('starts with stack size 0', () => {
     stack.isEmpty().should.be.true();
   });
   it('is not be empty when pushed');
   it('leaves stack size 1 when pushed');
   it('leaves stack empty when pushed and popped');
   it('leaves stack size 0 when pushed and popped');
   it('overflows');
   it('under-flows');
   it('pops the same one pushed');
   it('pops the same two pushed');
   it('accepts only positive capacity');
});

describe.only('the stack spec', () => {

  const makeStack = () => {
    let stackValues = [];

    return {
        isEmpty: () => stackValues.length === 0,
        size: () => stackValues.length,
        push: (value) => {
          if (stackValues.length === 3) throw new Error('Stack size should not exceed 3');
          stackValues.push(value);
        },
        pop: () => {
          if (stackValues.length === 0 ) throw new Error('cannot pop from empty stack');
          return stackValues.pop();
        }
      };
  };

  let stack;

  beforeEach(() => {
    stack = makeStack();
  });

  afterEach(() => {
    //cleanup function here.
  });

  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

   it('starts with stack size 0', () => {
     stack.size().should.equal(0);
   });

   it('is not be empty when pushed', () => {
     stack.push();
     stack.isEmpty().should.be.false();
   });

   it('leaves stack size 1 when pushed', () => {
     stack.push();
     stack.size().should.equal(1);
   });

   it('leaves stack empty when pushed and popped', () => {
     stack.push();
     stack.pop();
     stack.isEmpty().should.be.true();
   });

   it('leaves stack size 0 when pushed and popped', () => {
     stack.push();
     stack.pop();
     stack.size().should.be.equal(0);
   });

   it('overflows', () => {
     stack.push();
     stack.push();
     stack.push();
     (() => {
       stack.push();
     }).should.throw('Stack size should not exceed 3');
   });

   it('under-flows', () => {
     stack.push();
     stack.pop();

     const underflow = () => {
       stack.pop();
     };

     underflow.should.throw('cannot pop from empty stack');
   });

   it('pops the same one pushed', () => {
     stack.push('a');
     stack.pop().should.be.equal('a');
   });

   it('pops the same two pushed', () => {
     stack.push('a');
     stack.push('b');
     stack.pop().should.be.equal('b');
     stack.pop().should.be.equal('a');

   });
   it('accepts only positive capacity');
});

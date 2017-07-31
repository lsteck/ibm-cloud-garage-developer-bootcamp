describe('the stack obj spec', () => {


  let stack;

  var ObjStack = function(){
    this.size = 0;
  };

  ObjStack.prototype.isEmpty = function(){
    return this.size === 0;
  };

  ObjStack.prototype.push = function(){
    this.size++;
  };

  ObjStack.prototype.pop = function(){
    this.size--;
  };

  const makeStack = () => {
    return new ObjStack();
  };

  describe('the stack', () => {
    beforeEach(() => {
      console.log('beforeEach');
      stack = makeStack();
    });
  });

  it('starts empty', () => {
    stack = makeStack();
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size.should.equal(0);
  });

  it('is not be empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.be.false();
  });

  it('leaves stack size 1 when pushed', () => {
    stack = makeStack();
    stack.push();
    stack.size.should.be.equal(1);
  });

  it('leaves stack empty when pushed and popped', () => {
    stack = makeStack();
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('leaves stack size 0 when pushed and popped', () => {
    stack = makeStack();
    stack.push();
    stack.pop();
    stack.size.should.be.equal(0);
  });
  it('overflows');
  it('under-flows');
  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');

});

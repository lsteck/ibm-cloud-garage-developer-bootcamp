describe('the stack v2', () => {

  var StackObject = function(capacity = 5){
    if (capacity < 1) throw new Error('invalid capacity error');
    this.maxSize = capacity;
    this.values = [];
  };

  StackObject.prototype.isEmpty = function(){
    return this.values.length === 0;
  };

  StackObject.prototype.size = function(){
    return this.values.length;
  };

  StackObject.prototype.push = function(pushValue){
    if (this.values.length === this.maxSize) throw new Error('stack overflow error');
    this.values.push(pushValue);
  };

  StackObject.prototype.pop = function(){
    if (this.values.length === 0) throw new Error('can not pop from empty stack');
    return this.values.pop();
  };

  var stack;

  beforeEach(() => {
    stack = new StackObject();
  });

  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.be.equal(0);
  });

  it('is not be empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.be.false();
  });

  it('leaves stack size 1 when pushed', () => {
    stack.push();
    stack.size().should.be.equal(1);
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
    stack = new StackObject(3);
    stack.push();
    stack.push();
    stack.push();
    (() => {stack.push();}).should.throw('stack overflow error');
  });

  it('under-flows', () => {
      stack.push();
      stack.pop();
    (() => {stack.pop();}).should.throw('can not pop from empty stack');
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

  it('accepts only positive capacity', () => {
    (() => {stack = new StackObject(0);}).should.throw('invalid capacity error');
    (() => {stack = new StackObject(-1);}).should.throw('invalid capacity error');
  });
});

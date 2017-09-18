describe.only('the canary spec for stack', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const stackFactory = (capacity = 2) => {
    if(capacity < 0) throw new Error('can only accept positive capacity');
    let elements = [];

    const isEmpty = () => elements.length === 0;
    const size = () => {
      return elements.length;
    };
    const push = (newElement) => {
      if (size() === capacity) throw new Error('exceeds stack capacity');
      elements.push(newElement);
    };
    const pop = () => {
      if (isEmpty()) throw new Error('cannot pop empty stack');
      return elements.pop();
    };

    return {
      isEmpty,
      size,
      push,
      pop
    };
  };

  let stack;

  describe('a stack', () => {
    beforeEach(() => {
      stack = stackFactory();
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
      stack.size().should.equal(0);

    });

    it('overflows', () => {
      (() => {
        stack.push();
        stack.push();
        stack.push();
      }).should.throw('exceeds stack capacity');
    });

    it('under-flows', () => {
      (() => {
        stack.pop();
      }).should.throw('cannot pop empty stack');
    });

    it('pops the same one pushed', () => {
      let element = 'a';
      stack.push(element);
      stack.pop().should.equal(element);
    });

    it('pops the same two pushed', () => {
      let element1 = 'a';
      let element2 = 'b';
      stack.push(element1);
      stack.push(element2);

    });

    it('accepts only positive capacity', () => {
      (() => {
        stackFactory(-1);
      }).should.throw('can only accept positive capacity');
    });
  });
});

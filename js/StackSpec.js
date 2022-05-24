describe("Testing the Stack", () => {
  it("isEmpty returns true if stack is empty", () => {
    let stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
  });

  it("isEmpty returns false after calling push(value)", () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("peek returns null if stack is empty", () => {
    let stack = new Stack();

    expect(stack.peek()).toBe(null);
  });

  it("peek returns most recent pushed value", () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it("pop throws exception if stack is empty", () => {
    let stack = new Stack();

    expect(stack.pop).toThrow();
  });

  it("pop returns most recent pushed value", () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  it("peek returns null if pop is called", () => {
    let stack = new Stack();
    stack.push(1);
    stack.pop();
    expect(stack.peek()).toBe(null);
  });

  it("isEmpty returns true after pop is called", () => {
    let stack = new Stack();
    stack.push(1);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it("peek returns first value if push twice pop once", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(5);
    stack.pop();
    expect(stack.peek()).toBe(1);
  });

  it("contains returns true if value is present", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(545);
    stack.push(89);
    stack.push(76);
    expect(stack.contains(89)).toBe(true);
  });
});

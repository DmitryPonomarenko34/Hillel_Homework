class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const bars = new Cat("Bars", 3);

test("object has name field ?", () => {
  expect(bars.name).toBeTruthy();
});

test("object age field is number ?", () => {
  expect(bars.age).toBeInstanceOf(Number);
});

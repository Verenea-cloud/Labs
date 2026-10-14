function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function calculate() {
  const results = [];

  for (let i = 0; i < 10; i++) {
    const result = average(square(i), cube(i));
    results.push(result);
  }

  return results;
}

console.log(calculate());
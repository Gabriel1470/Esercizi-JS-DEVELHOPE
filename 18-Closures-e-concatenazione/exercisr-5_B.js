function memoize(fn) {
  let cache = {};
  return (num) => {
    if (num in cache) {
      console.log('fetching cache for ' + num)
      return cache[num]
    }
    console.log('Calculate result for ' + num)
    return cache[num] = fn(num)

  }
}







function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(8));
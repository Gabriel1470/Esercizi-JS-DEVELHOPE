//PROVA N1

/* function memoize(fn) {
  let cache = {
    key: fn,
    ris: [],
    op: function opera(key) {
      for (let i = 0; i < cache.ris.length + 1; i++) {
        if (fn == cache.ris[i]) {
          return console.log(`Fetching from cache ${ris[i]}`);
        } else {
          cache.ris.push(fn)
          return console.log(cache.ris)
        }
      }

    }
  }
} */

//PROVA N2

/* function memoize(fn) {
  let cache = {};
  const func = fn

  return function calc(fn) {
    if (!(fn in cache)) {
      cache[fn] = calc(fn);
      return `calcolo risultato per ${fn}  ${calc(fn)}`;

    }


  }


}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial(10));
 console.log(factorial(10)); 
console.log(factorial(6));
console.log(factorial(5)); */



//NON LO SO FARE PROVA N3 MODIFICO LO SNIPPET INIZIALE

function memoize(fn) {
  let cache = {}
  const anotherFunction = fn;
  return function (x) {
    if (!(x in cache)) {
      cache[x] = anotherFunction(x);
      //console.log('this is cache', cache);
      return `Calculating new result for ${x} -> ${cache[x]}}`;
    } else return `Fetch from cache ${x} -> ${cache[x]}`



  }
}


{
  const lut = [1, 1];

  function factorial(n) {
    for (let i = lut.length; i <= n; i++) {
      lut.push(Number(i) * lut[i - 1]);
    }
    return lut[n];
  }
}

factorial = memoize(factorial)
console.log('starting');
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
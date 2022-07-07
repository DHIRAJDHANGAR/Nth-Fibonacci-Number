function nthFibonacci(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    if (array.length === 0) {
      array.push(0, 1);
    } else {
      let elem = (array[i - 1] % 1000000007) + (array[i] % 1000000007);
      array.push(elem);
    }
  }
  //   console.log(array);
  let output = array[n] % 1000000007;
  console.log(output);
  return output;
}
nthFibonacci(656);
nthFibonacci(2);
nthFibonacci(5);
nthFibonacci(98);

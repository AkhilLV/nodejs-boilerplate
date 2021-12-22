// Recursion: Calling the function in the function

// Factorials
// n! = n>=1 ? n.(n-1)! : 1

const factorial = n => {
  if (n >= 1) {
    return n * factorial(n - 1)
  }
  return 1
}

// console.log(`Factorial: ${factorial(4)}`)

// What really happened
// 1. f(4) -> 4 * f(3) => 4 * 6 => 24
// 2. f(3) -> 3 * f(2) => 3 * 2 => 6
// 3. f(2) -> 2 * f(1) => 2 * 1 => 2
// 4. f(1) -> 1 * f(0) => 1 * 1 => 1
// f. f(0) -> 1

// Fibonacci
// 1, 1, 2, 3, 5, 8, 13, 21 ...
// F(n) = F(n - 1) + F(n - 2)

const fibonacci = n => {
  if (n >= 3) { return fibonacci(n - 1) + fibonacci(n - 2) }
  return 1
}

// console.log(fibonacci(20))

// What really happened
// 1. f(4) -> f(3) + f(2)
// 2. f(3) -> f(2) + f(1)
// 3. f(2) -> 1
// 4. f(1) -> 1
// 5. f(3) -> 2
// 6. f(4) -> 2 + 1 = 3

// Memoize

// const fibonacciM = (n, memo) => {
//   if (memo[n] != null) { return memo[n] }
//   let result
//   if (n === 1 || n === 2) {
//     result = 1
//   } else {
//     result = fibonacciM(n - 1, memo) + fibonacciM(n - 2, memo)
//   }
//   memo[n] = result
//   return result
// }

const fibonacciM = (n, memo) => {
  if (memo[n] != null) { return memo[n] }
  let result
  if (n === 1 || n === 2) {
    result = 1
  } else {
    result = fibonacciM(n - 1, memo) + fibonacciM(n - 2, memo)
  }
  memo[n] = result
  return result
}

console.log(fibonacciM(6, {}))

// console.log(fibonacciM(100, {}))
const numbers = [92, 2, 67, 33, 29, 19];

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number
})

const numbersLessThanTen = numbers.filter((number) => {
  return (number < 10)
})

console.log(numbersLessThanTen)
function factorial(num) {
  let product = 1;
  while (num > 1) {
    product *= num
    num -= 1
    }
  return product
}
module.exports = factorial;

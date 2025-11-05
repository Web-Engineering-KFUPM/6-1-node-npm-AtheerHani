export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.slice(1).reduce((diff, num) => diff - num, numbers[0]);
}

export function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
  if (!numbers || numbers.length === 0) return NaN;

  // If any divisor is zero, return NaN to indicate invalid operation
  const divisors = numbers.slice(1);
  if (divisors.some((n) => n === 0)) return NaN;

  return divisors.reduce((quotient, num) => quotient / num, numbers[0]);
}


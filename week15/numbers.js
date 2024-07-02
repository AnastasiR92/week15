const numbers = [];

for(let i = -10; i<= 10; i++) {
    numbers.push(i);
}

let positiveNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        positiveNumbers.push(numbers[i]);
    }
}

let squaredNumbers = [];
for (let i = 0; i < positiveNumbers.length; i++) {
    squaredNumbers.push(positiveNumbers[i] * positiveNumbers[i]);
}

let sortedSquares = [...squaredNumbers].sort((a, b) => b - a);

console.log("Положительные числа:", positiveNumbers);
console.log("Квадраты чисел:", squaredNumbers);
console.log("Отсортированные числа:", sortedSquares);

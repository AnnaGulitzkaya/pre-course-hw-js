const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

const newNumbers = numbers.map(row => row.slice().map(num => num % 2 === 0 ? num : null).filter(num => num !== null));
console.log(newNumbers);
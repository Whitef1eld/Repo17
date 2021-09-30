const range = {
    max: 100.00,
    min: -25.00,
    num1: 17.50,
    num2: 88.80,
    average: 45.325
};

// only change code below this line
const middle = ({max, min}) => (min + max) / 2.0;
// only change code above this line

console.log(middle(range));
module.exports = middle;

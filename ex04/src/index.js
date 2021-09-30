const BAKING_TEMPERATURES = {
    cake: { low: 180, high: 250},
    bread: { low: 150, high: 220},
    pie: { low: 200, high: 230 }
};

function main(baking) {
    // only change code below this line
    const { bread: { low: lowBread, high: highBread }} = BAKING_TEMPERATURES;
    return { 
        lowBread,
        highBread
    };
    // only change code above this line
}

console.log(main(BAKING_TEMPERATURES));
module.exports = main;

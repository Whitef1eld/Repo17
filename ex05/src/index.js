let foo = 12, boo = 45;

function main(foo, boo) {
    // only change code below this line
    [foo, boo] = [boo, foo];
    // only change code above this line
    return {foo, boo};
}

console.log(main(foo, boo));
module.exports = main;

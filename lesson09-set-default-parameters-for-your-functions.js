//Set Default Parameters for Your Functions


const increment = (function () {
    "use strict";
    return function increment(number, value) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
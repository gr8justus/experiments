'use strict';

const add = (a, b, cb) => {
    setTimeout(() => {
        const sum = a + b;
        cb(sum);
    }, 2000);
}
add(1, 4, (sum) => {
    console.log(sum);
})

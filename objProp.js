'use strict';

let obj = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 'stuff',
};

for (let key in obj) {
    console.log(obj[key]);
}

'use strict';

let loaf = {
    flour: 300,
    water: 210,
    hydration: function(){console.log(this.water / this.flour * 100)}
}
console.log(loaf);
console.log(loaf.flour);
console.log(loaf.water);

loaf.hydration();
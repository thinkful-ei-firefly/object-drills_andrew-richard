'use strict';

let obj1 = {
  name: 'Joe',
  jobTitle: 'Mechanic'
};

let obj2 = {
  name: 'Mike',
  jobTitle: 'Developer'
};

let obj3 = {
  name: 'Jane',
  jobTitle: 'Doctor'
};

let arr = [obj1, obj2, obj3];

arr.forEach(function(obj) {
  console.log(`${obj.name} is a ${obj.jobTitle}.`);
});


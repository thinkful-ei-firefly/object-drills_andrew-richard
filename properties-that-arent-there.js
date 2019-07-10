'use strict';

let obj1 = {
  name: 'Joe',
  jobTitle: 'Mechanic',
  boss: 'Mike',
};

let obj2 = {
  name: 'Mike',
  jobTitle: 'Developer',
  boss: 'Jane',
};

let obj3 = {
  name: 'Jane',
  jobTitle: 'Doctor'
};

let arr = [obj1, obj2, obj3];

arr.forEach(function(obj) {
    let title = obj.jobTitle;
    let name = obj.name;
    let boss = obj.boss;
  if (obj.boss !== undefined) {
     console.log(`${title} ${name} reports to ${boss}.`)
  }
  else if (obj.boss === undefined) {
      console.log(`${title} ${name} doesn't report to anybody.`)
  }
  else {
      console.log("Something broke");
  }
});


'use strict';

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

  function findOne(arr, query) {
      let searchKeys = Object.keys(query);
      let x = Object.keys(arr[0]);
    
      for (let arrI = 0; arrI <= arr.length; arrI++){
            for (let objKeyI = 0; objKeyI <= searchKeys.length; objKeyI++){//Cycle through each key of the current index'd of arr
                if (arr[arrI].searchKeys[0] != undefined){//If first query key is found in this object's keys
                   {//if all keys from query exist in arr's object
                        {//if all key values match
                            //return HEROES[i]
                        }
                    }
                }
                else {
                    return null;
                }
            }
      }
    }

  findOne(HEROES, {id: 1});
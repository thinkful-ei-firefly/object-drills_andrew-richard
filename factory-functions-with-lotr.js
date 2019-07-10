'use strict';

function createCharacter(name, nickname, race, origin, attack, defense, weapon = 'none') {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function(){
      if (this.weapon === 'none') {
        console.log(`${name} is a ${race} from ${origin}.`);
      }
      else {
        console.log(`${name} of the ${origin} who uses a ${weapon}`);
      }
    },
    evaluateFight: function(character){
      let damageTaken = character.attack - this.defense;
      let damageGiven = this.attack - character.defense;
      if (damageTaken < 0){
        damageTaken = 0;
      }
      if (damageGiven < 0){
        damageGiven = 0;
      }
      console.log(`Your opponent takes ${damageGiven} damage and you receive ${damageTaken} damage.`);
    }
  }
}

let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'staff');
let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
let frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
let aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 6);
let legolas = createCharacter('Legolas', 'legolas', 'elf', 'Woodland Realm', 8, 5);
let arwen = createCharacter('Arwen Unodomiel', 'arwen', 'half-elf', 'Rivendell', 60, 60);

let characters = [gandalf, bilbo, frodo, aragorn, legolas];

gandalf.describe();

gandalf.evaluateFight(bilbo);

characters.push(arwen);

//console.log(characters);

characters.find(function(char){return char === aragorn}).describe();

let isHobbit = characters.filter(function(char){
  return char.race === 'Hobbit';
});

let attackAbove5 = characters.filter(function(char){
  return char.attack > 5;
});


gandalf.weapon = 'wizard staff';

gandalf.describe();

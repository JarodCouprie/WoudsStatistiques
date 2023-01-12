//Caculate how many hit and saves you can make

/*
proba 1+ : 6/6
proba 2+ : 5/6
proba 3+ : 4/6
proba 4+ : 3/6
proba 5+ : 2/6
proba 6+ : 1/6
*/

function d6RollHits(dicesNumber, roll){
    return dicesNumber * ((7-roll)/6);
}

let attack = 26;
let ballisticSkill = 3;
let woundSkill = 3;
let armorSave = 7;
let damages = 1;

let hit = d6RollHits(attack, ballisticSkill);
let wound = d6RollHits(hit,woundSkill);
let unsavedWounds = wound - d6RollHits(wound,armorSave);
let damagesTaken = unsavedWounds * damages;

// console.log(hit+" touches");
// console.log(wound+" blessures");
console.log(unsavedWounds.toFixed(2)+" blessures non sauvegardées");
console.log(damagesTaken.toFixed(2)+" dommages");

/*
Number of attacks
Ballistic skill or Weapon skill :
    - modifiers ?
    - extra hits ?
    - mortal wounds ?
Strength of the weapon or strength and weapon modifiers :
    - modifiers ?
    - extra wounds ?
    - mortal wounds ?
Armor penetration :
    - modifiers ?
    - cover ?
Damages :
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - D3+1
    - D3+2
    - D3+3
    - D3+4
    - D3+5
    - D3+6
    - D6+1
    - D6+2
    - D6+3
    - D6+4
    - D6+5
    - D6+6
Toughness of the target :
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
Normal save :
    - 2+
    - 3+
    - 4+
    - 5+
    - 6+
    - modifiers ?
Invulnerable save :
    - 2+
    - 3+
    - 4+
    - 5+
    - 6+
    - modifiers ?
*/
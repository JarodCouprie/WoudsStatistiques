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
    return Math.round(dicesNumber * ((7-roll)/6));
}

function d6RollStats(dicesNumber, roll){
    return dicesNumber * ((7-roll)/6);
}

let hit = d6RollHits(21, 4);
let wound = d6RollHits(hit,2);
let damages = 3*(wound - d6RollHits(wound,5));


console.log(hit+" touches");
console.log(wound+" blessures");
console.log(damages+" dégats");


hit = d6RollStats(21, 4);
wound = d6RollStats(hit,2);
damages = 3*(wound - d6RollStats(wound,5));


console.log(hit+" touches");
console.log(wound+" blessures");
console.log(damages+" dégats");







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
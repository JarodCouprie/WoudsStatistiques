//Caculate how many hit touches and saves you can make

let attackNumber = prompt("Nombre d'attaques")
console.log(attackNumber+ " : attaques");

let balisticSkill = prompt("Capacité de tir / capacité de combat de l'attaquant");
console.log(balisticSkill+"+ : capacité de tir / capacité de combat");

let strengthWeapon = prompt("Force de l'arme de l'attaquant");
console.log(strengthWeapon+" : force de l'arme");

let toughnessTarget = prompt("Endurance de la cible");
console.log(toughnessTarget+" : endurance de la cible");

let armorPenetration = prompt("Pénétration d'armure de l'arme de l'attaquant");
console.log(armorPenetration+" : pénétratrion d'armure");

let saveTarget = prompt("Sauvegarde de la cible");
console.log(saveTarget+"+ : sauvegarde de la cible");

let damageNumber = prompt("Nombre de dommages de l'arme de l'attaquant");
console.log(damageNumber+" : dommages de l'arme");

let numberOfHit = attackNumber * ((7-balisticSkill)/6);
console.log(numberOfHit+" touches réalisées");

let wounds = 0;
if (strengthWeapon <= (toughnessTarget / 2)){
    wounds = numberOfHit/6;
};
if (strengthWeapon < (toughnessTarget / 2) && strengthWeapon < toughnessTarget){
    wounds = (numberOfHit*2)/6;
};
if (strengthWeapon == toughnessTarget){
    wounds = (numberOfHit*3)/6 ;
}
if (strengthWeapon > toughnessTarget && strengthWeapon < (toughnessTarget * 2)){
    wounds = (numberOfHit*4)/6;
}
if (strengthWeapon >= (toughnessTarget * 2)){
    wounds = (numberOfHit*5)/6;
}
console.log(wounds+" blessures réalisés");

let saveTargetModified = saveTarget + armorPenetration;

let numberOfDamages = 0;
if (saveTargetModified >= 7){
    numberOfDamages = wounds;
}
if (saveTargetModified == 6){
    numberOfDamages = (wounds /6 );
}
if (saveTargetModified == 5){
    numberOfDamages = ((wounds*4)/6);
}
if (saveTargetModified == 4){
    numberOfDamages = ((wounds*3)/6);
}
if (saveTargetModified == 3){
    numberOfDamages = ((wounds*2)/6);
}
if (saveTargetModified <= 2){
    numberOfDamages = ((wounds*1)/6);
}

console.log(numberOfDamages+" blessures non sauvegardées");
console.log(numberOfDamages*damageNumber+" dégâts non sauvegardés");
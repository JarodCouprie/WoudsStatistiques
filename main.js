//Caculate how many hit touches and saves you can make

//proba 1+ : 6/6
//proba 2+ : 5/6
//proba 3+ : 4/6
//proba 4+ : 3/6
//proba 5+ : 2/6
//proba 6+ : 1/6

function statsDes(nombreDes, pallier){
    return Math.ceil(nombreDes * ((7-pallier)/6));
}

console.log(statsDes(12,4));


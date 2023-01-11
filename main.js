//Caculate how many hit touches and saves you can make

//proba 1+ : 6/6
//proba 2+ : 5/6
//proba 3+ : 4/6
//proba 4+ : 3/6
//proba 5+ : 2/6
//proba 6+ : 1/6

function statsDes(nombreDes, pallier){
    let proba = Math.ceil((7-pallier)/6)
    return (nombreDes * proba);
}

console.log(statsDes(6,6));


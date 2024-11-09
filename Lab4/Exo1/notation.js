function mean(Scores){
    let average =0;

    for(let i=0;i< Scores.length;i++){
        average += Scores[i];
    }

    average = average / Scores.length;
    return average;

}

module.exports = mean;


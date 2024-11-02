function mean(Scores){
    let average =0;

    for(let i=0;i< Scores.length;i++){
        average += Scores[i];
    }

    average = average / Scores.length;

    console.log(average);
}

module.exports = mean;


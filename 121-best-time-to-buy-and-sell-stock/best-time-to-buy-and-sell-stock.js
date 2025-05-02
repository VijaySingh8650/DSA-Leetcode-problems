/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy = Infinity;
    let sell = 0;

    for(let i=0; i<prices.length; i++){

        if(buy>prices[i]){

            buy = prices[i];


        }
        else if(prices[i] - buy > sell){

            sell = prices[i] - buy

        }

    }
    return sell;

    
};
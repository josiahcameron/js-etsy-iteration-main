(function(){
    'use strict';

    //1. Show me how to calculate the average price of all items listed in USD. Please console.log the average.
    const onlyUSD = items.filter(function(item){
        return item.currency_code === 'USD';
    })

    const allPrices = onlyUSD.map(function(item){
        return item.price;
        })

    const priceSum = allPrices.reduce(function(total,current){
        return total + current;
    })

    const priceAvg = (priceSum/allPrices.length).toFixed(2);
    
    console.log(priceAvg)
    ;
    
    //2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.








})();
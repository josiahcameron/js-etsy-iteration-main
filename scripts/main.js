(function(){
    'use strict';

    //1. Show me how to calculate the average price of all items listed in USD. Please console.log the average.

    
    const onlyUSD = items.filter(function(item){
        return item.currency_code === 'USD';
    })

    const allUsdPrices = onlyUSD.map(function(item){
        return item.price;
        })

    const priceSum = allUsdPrices.reduce(function(total,current){
        return total + current;
    })

    const priceAvg = (priceSum/allUsdPrices.length).toFixed(2);
    
    console.log(priceAvg)
    ;
    
    //2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.
    const limitRange = items.filter(function(item){
        return (item.price >= 14 && item.price <= 18) && item.currency_code === 'USD';
    }).map(function(item){
         return item.title
        })
    console.log(limitRange)





})();
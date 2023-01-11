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
    
    
    //2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.
    const limitRange = items.filter(function(item){
        return (item.price >= 14 && item.price <= 18) && item.currency_code === 'USD';
    }).map(function(item){
         return `"Items that cost between $14.00 USD and $18.00 USD:"
          ${item.title}`
        })
    console.log(limitRange)

    //3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
    const onlyGBP = items.filter(function(item){
        return item.currency_code === 'GBP';
    }).map(function(item){
        const gbpName = item.title;
        const gbpPrice = item.price;
        return `${gbpName} costs £${gbpPrice}.`
    })
    console.log(onlyGBP);





})();
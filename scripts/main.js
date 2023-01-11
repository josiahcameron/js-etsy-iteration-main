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

    //4. Show me how to find which items are made of wood. Please console.log the ones you find.
    // const onlyWood = items.filter(function(item){
    //     var filteredWood = item.materials.split (' ')
    //     return filteredWood.filter(function(wood){
    //         return filtersArray.indexOf(cat) > -1;
    //     }).length === filtersArray.length;
    //     });
    // console.log(onlyWood)

    //5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

    const filterMaterial = items.filter(function(item){
        return item.materials.length >= 8;
        }).map(function(item){
            const bigMatName = item.title;
            const bigMatList = item.materials;
            return `${bigMatName} has ${bigMatList.length} materials:
            ${bigMatList}`;
        })

        console.log(filterMaterial)

})();
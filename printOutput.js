module.exports.printOutput = function(airport,central){

    console.log(`TOTAL_COLLECTION CENTRAL ${central.amount} ${central.discount}\n`);

    deleteFields(central);

    // Get an array of key-value pairs and sort it in descending order by value
    
    const sortedEntriesCentral = sortAndCreateEntries(central);

    // Loop through the sorted array and print the passenger type summary
    console.log('PASSENGER_TYPE_SUMMARY\n');
    
    print(sortedEntriesCentral);

    console.log(`TOTAL_COLLECTION AIRPORT ${airport.amount} ${airport.discount}\n`);

    deleteFields(airport);

    const sortedEntriesAirport = sortAndCreateEntries(airport);

    console.log('PASSENGER_TYPE_SUMMARY\n');
    
    print(sortedEntriesAirport);

}

function deleteFields(station){
    delete station.amount;
    delete station.discount;
}

function sortAndCreateEntries(station){
    const entries = Object.entries(station);
    const sortedEntries = entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    return sortedEntries;
}

function print(sortedEntries){
    for (const [passengerType, count] of sortedEntries) {
        if(count!=0)
            console.log(`${passengerType} ${count}\n`);
    }
}
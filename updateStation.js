module.exports.updateStation = function(station,passengerType,res){
    station[passengerType]+=1;
    station.amount+=res.collectionAtStation;
    station.discount+= res.discountGivenAtStation;
}
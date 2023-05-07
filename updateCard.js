const ADULT_CHARGES = 200;
const KID_CHARGES = 50;
const SENIOR_CITIZEN_CHARGES = 100;

module.exports.updateCard = function(passengerType,card){

    if(passengerType=="ADULT"){
        card.passangerType="ADULT";
        card.charges = ADULT_CHARGES;
    }
    else if(passengerType=="KID"){
        card.passangerType="KID";
        card.charges = KID_CHARGES;
    }
    else{
        card.passangerType="SENIOR_CITIZEN";
        card.charges = SENIOR_CITIZEN_CHARGES;
    }

}
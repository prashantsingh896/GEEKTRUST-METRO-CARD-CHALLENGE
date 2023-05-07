class MetroCard{
    static DISCOUNT = 0.5;
    static SERVICE_CHARGE = 0.02;

    constructor(cardNumber,balance){
        this.cardNumber = cardNumber;
        this.balance = balance;
        this.passangerType = null;
        this.isReturnJourney=false;
        this.charges = 0;
    };
    
    deductBalance(){
        const res = {};
        let discount = 0;
        if(this.isReturnJourney==true){
            discount = MetroCard.DISCOUNT;
        }
        let collectionAtStation;

        const fare = this.charges - this.charges*discount;

        if(fare>this.balance){
            const diff = fare - this.balance;
            res.collectionAtStation = fare + diff * MetroCard.SERVICE_CHARGE;
            this.balance = 0;
        }
        else{
            this.balance -= fare;
            res.collectionAtStation = fare;
        }

        this.isReturnJourney=!this.isReturnJourney;
        res.discountGivenAtStation = this.charges*discount;
        return res;
    }
} 

module.exports = MetroCard;
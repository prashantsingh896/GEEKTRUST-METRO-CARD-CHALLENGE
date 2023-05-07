const fs = require("fs");
const MetroCard = require('./metroCard');
const print = require('./printOutput');
const { updateCard } = require('./updateCard');
const { updateStation } = require("./updateStation");

const filename = process.argv[2];

let central = {
    ADULT: 0,
    KID: 0,
    SENIOR_CITIZEN: 0,
    amount: 0,
    discount: 0,
  };
  
  let airport = {
    ADULT: 0,
    KID: 0,
    SENIOR_CITIZEN: 0,
    amount: 0,
    discount: 0,
};

fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err;
    var inputLines = data.toString().split("\n");
      let cardDetails = [];

      for (eachLine of inputLines) {

        const data = eachLine.split(" ");
        const firstText = data.shift();
      
        if (firstText == "BALANCE") {
          const [cardNumber,balance] = data
          const card = new MetroCard(cardNumber,Number(balance));
          cardDetails.push(card);  

        } else if(firstText=="CHECK_IN") {
            const [cardNumber,passengerType,fromStation] = data;
            let card = cardDetails.find((card) => card.cardNumber == cardNumber);
            updateCard(passengerType,card);
            const res = card.deductBalance();

            if(fromStation=="AIRPORT"){
                updateStation(airport,passengerType,res);
            }
            else{
                updateStation(central,passengerType,res);
            }
        }
        else{
            print.printOutput(airport,central);
        }
      }
});

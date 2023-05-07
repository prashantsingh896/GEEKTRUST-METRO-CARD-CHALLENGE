const MetroCard = require('../metroCard');

describe('MetroCard', () => {
  test('deductBalance should return correct collectionAtStation and discountGivenAtStation amounts', () => {
    const card = new MetroCard('1234567890', 300);
    card.passangerType = 'ADULT';
    card.charges = 200;
    const res = card.deductBalance();
    expect(card.balance).toBe(100);
    expect(res.collectionAtStation).toBe(200);
    expect(res.discountGivenAtStation).toBe(0);

    const res2 = card.deductBalance();
    expect(card.balance).toBe(0);
    expect(res2.collectionAtStation).toBe(100);
    expect(res2.discountGivenAtStation).toBe(100);

    const res3 = card.deductBalance();
    expect(card.balance).toBe(0);
    expect(res3.collectionAtStation).toBe(204);
    expect(res3.discountGivenAtStation).toBe(0);

  });
});



  


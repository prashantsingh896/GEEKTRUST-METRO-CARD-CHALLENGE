const {printOutput} = require('../printOutput');

describe('printOutput', () => {
  let consoleSpy;

  beforeEach(() => {
    // Mock console.log() to capture output
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Restore console.log() to its original implementation
    consoleSpy.mockRestore();
  });

  test('prints passenger type summary for central and airport', () => {
    const airport = {
      amount: 1000,
      discount: 100,
      Adult: 10,
      Child: 0,
      Infant: 3
    };

    const central = {
      amount: 500,
      discount: 50,
      Adult: 7,
      Child: 3,
      Infant: 2
    };

    printOutput(airport, central);

    expect(consoleSpy).toHaveBeenCalledWith(`TOTAL_COLLECTION CENTRAL 500 50\n`);
    expect(consoleSpy).toHaveBeenCalledWith(`PASSENGER_TYPE_SUMMARY\n`);
    expect(consoleSpy).toHaveBeenCalledWith(`Adult 7\n`);
    expect(consoleSpy).toHaveBeenCalledWith(`Child 3\n`);
    expect(consoleSpy).toHaveBeenCalledWith(`Infant 2\n`);
    expect(consoleSpy).toHaveBeenCalledWith(`TOTAL_COLLECTION AIRPORT 1000 100\n`);
    expect(consoleSpy).toHaveBeenCalledWith(`PASSENGER_TYPE_SUMMARY\n`);
    expect(consoleSpy).toHaveBeenCalledWith(`Adult 10\n`);
    expect(consoleSpy).toHaveBeenCalledWith(`Infant 3\n`);
  });
});

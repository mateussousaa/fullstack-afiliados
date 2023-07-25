import { parseTransactions } from '../utils/parseTransactions';

describe('parseTransactions', () => {
  test('the parse from txt to object: Transaction(Type)', () => {
    const data = '12022-01-15T19:20:30-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS';
    const transactions = parseTransactions(data.split("\n"));

    expect(transactions).toEqual([
      { 
        typeId: 1,
        product: "CURSO DE BEM-ESTAR",
        date: new Date('2022-01-15T22:20:30.000Z'),
        seller: "JOSE CARLOS",
        value: 12750
      }
    ]);
  });
});

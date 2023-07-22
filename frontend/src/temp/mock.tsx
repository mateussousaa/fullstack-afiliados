interface ITransaction {
  id: number,
  data: Date,
  product: string,
  value: number,
  seller: string,
  transactionType: ITransactionType
}

interface ITransactionType {
  id: number,
  description: string,
  nature: string,
  signal: string,
}

export const transactions: ITransaction[] = [
  {
    id: 1,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Entrada',
      signal: '+'
    }
  }, {
    id: 2,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Entrada',
      signal: '+'
    }
  }, {
    id: 3,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Saida',
      signal: '-'
    }
  }, {
    id: 4,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Entrada',
      signal: '+'
    }
  }, {
    id: 1,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Entrada',
      signal: '+'
    }
  }, {
    id: 1,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Entrada',
      signal: '+'
    }
  }, {
    id: 1,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Entrada',
      signal: '+'
    }
  }, {
    id: 1,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Entrada',
      signal: '+'
    }
  }, {
    id: 1,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Entrada',
      signal: '+'
    }
  }, {
    id: 1,
    data: new Date(),
    product: 'product name',
    value: 10.99,
    seller: 'seller',
    transactionType: {
      id: 1,
      description: 'Venda produtor',
      nature: 'Entrada',
      signal: '+'
    }
  }
];
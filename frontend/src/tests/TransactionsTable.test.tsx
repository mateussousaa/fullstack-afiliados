import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TransactionsTable from '../components/TransactionsTable';

describe('TransactionsTable', () => {
  test('displays "No Transactions" when there are no transactions', () => {
    render(<TransactionsTable />);
    const noTransactionsText = screen.getByText(/No Transactions/i);
    expect(noTransactionsText).toBeInTheDocument();
  });

  test('displays transactions table with correct data', async () => {
    render(<TransactionsTable />);

    const headers = await screen.findAllByRole('columnheader');
    expect(headers).toHaveLength(7);
    expect(headers[0]).toHaveTextContent('ID');
    expect(headers[1]).toHaveTextContent('Date');
    expect(headers[2]).toHaveTextContent('Product');
    expect(headers[3]).toHaveTextContent('Value');
    expect(headers[4]).toHaveTextContent('Seller');
    expect(headers[5]).toHaveTextContent('Description');
    expect(headers[6]).toHaveTextContent('Nature');

    const transactionId = await screen.findByText('1');
    const transactionDate = await screen.findByText('2022-01-15T22:20:30.000Z');
    const transactionProduct = await screen.findByText('CURSO 1');
    const transactionValue = await screen.findAllByText('R$ 600,00');
    const transactionSeller = await screen.findByText('SELLER 1');
    const transactionDescription = await screen.findByText('Venda produtor');
    const transactionNature = await screen.findByText('INPUT');

    expect(transactionId).toBeInTheDocument();
    expect(transactionDate).toBeInTheDocument();
    expect(transactionProduct).toBeInTheDocument();
    expect(transactionValue).toHaveLength(2);
    expect(transactionSeller).toBeInTheDocument();
    expect(transactionDescription).toBeInTheDocument();
    expect(transactionNature).toBeInTheDocument();
  });
})
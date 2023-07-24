import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Transaction } from "../interfaces/Transaction";
import { useAppContext } from "../hooks/useAppContext";
import { formatPrice } from "../utils/formatPrice";

const TransactionArea = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow-y: auto;
  text-align: center;
`

const TransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: start;
`

const TransactionHeader = styled.th`
  text-align: start;
  background-color: var(--color04);
  padding: 10px;
`

const TransactionCell = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 10px;
`

const NoTransactionSpan = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: var(--color04);
`

const PriceArea = styled.div`
  padding: 24px;
  text-align: center;
`

const PriceText = styled.p`
  padding: 4px;
  text-align: center;
  margin: auto;
  max-width: 160px;
  background-color: var(--color05);
  color: white;
  border-radius: 4px;
`

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const { isLoading } = useAppContext();

  
  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      const { message: transactions } = data;
      setTransactions(transactions);

      const totalPrice = transactions.reduce((acc: number, t: Transaction) => {
        return t.type.nature === 'INPUT'
          ? acc + Number(t.value)
          : acc - Number(t.value)
      }, 0)
  
      const formattedTotalPrice = parseFloat(totalPrice.toFixed(2));
      setTotalPrice(formattedTotalPrice);
    }
    fetchTransactions()
  }, [isLoading])

  return (
    <TransactionArea>
      <PriceArea>
        <PriceText>Total: <span>{formatPrice(totalPrice)}</span></PriceText>
      </PriceArea>
      {transactions.length ? (
        <TransactionTable>
          <thead>
            <tr>
              <TransactionHeader>ID</TransactionHeader>
              <TransactionHeader>Date</TransactionHeader>
              <TransactionHeader>Product</TransactionHeader>
              <TransactionHeader>Value</TransactionHeader>
              <TransactionHeader>Seller</TransactionHeader>
              <TransactionHeader>Description</TransactionHeader>
              <TransactionHeader>Nature</TransactionHeader>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <TransactionCell>{t.id}</TransactionCell>
                <TransactionCell>{(new Date(t.date)).toISOString()}</TransactionCell>
                <TransactionCell>{t.product}</TransactionCell>
                <TransactionCell>{formatPrice(t.value)}</TransactionCell>
                <TransactionCell>{t.seller}</TransactionCell>
                <TransactionCell>{t.type.description}</TransactionCell>
                <TransactionCell>{t.type.nature}</TransactionCell>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      ) : (
        <NoTransactionSpan>No Transactions</NoTransactionSpan>
      )}
    </TransactionArea>
  )
}

export default TransactionsTable;

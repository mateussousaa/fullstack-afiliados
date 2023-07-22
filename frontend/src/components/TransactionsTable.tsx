import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { transactions } from "../temp/mock";

const TransactionArea = styled.div`
  padding: 16px 8px 0px;
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

const TransactionsTable: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  
  useEffect(() => {
    const totalPrice = transactions.reduce((acc, t) => {
      if(t.transactionType.signal === "+") return acc + t.value
      
      return acc - t.value
    }, 0)

    const formattedTotalPrice = parseFloat(totalPrice.toFixed(2));
    setTotalPrice(formattedTotalPrice);
  }, [])

  return (
    <TransactionArea>
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
                <TransactionCell>{t.data.toISOString()}</TransactionCell>
                <TransactionCell>{t.product}</TransactionCell>
                <TransactionCell>{t.value}</TransactionCell>
                <TransactionCell>{t.seller}</TransactionCell>
                <TransactionCell>{t.transactionType.description}</TransactionCell>
                <TransactionCell>{t.transactionType.nature}</TransactionCell>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      ) : (
        <NoTransactionSpan>No Transactions</NoTransactionSpan>
      )}
      <PriceArea>
        <p>Total: <span>R$ {totalPrice}</span></p>
      </PriceArea>
    </TransactionArea>
  )
}

export default TransactionsTable;

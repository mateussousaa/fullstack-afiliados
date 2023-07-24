export interface Transaction {
    id: number,
    date: Date | string,
    product: string,
    value: number,
    seller: string,
    typeId: number,
    type: TransactionType
}

export interface TransactionType {
  id: number,
  description: string,
  nature: string,
  signal: string,
}
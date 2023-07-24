export interface Transaction {
  id?: number,
  date: Date | string,
  product: string,
  value: number,
  seller: string,
  typeId: number
}
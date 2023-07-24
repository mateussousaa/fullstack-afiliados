import { Transaction } from "../interfaces/Transaction";

const parseTransactions = (lines: string[]): Transaction[] => {
  return lines.map((line) => 
    ({
      typeId: Number(line.slice(0, 1)),
      date: new Date(line.slice(1, 26)),
      product: line.slice(26, 50).trim(),
      value: Number(line.slice(56, 66)),
      seller: line.slice(66).trim(),
    })
    )
}

export { parseTransactions };
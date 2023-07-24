import { readFileSync } from 'fs'
import { parseTransactions } from '../utils/parseTransactions'
import { PrismaClient } from '@prisma/client'
const prismaClient = new PrismaClient();

const uploadTransactions = async (path: string) => {
  const data = readFileSync(path, { encoding: 'utf-8'})
    const lines = data.split("\n").filter((line) => line.trim() != "")

    const transactions = parseTransactions(lines);

    await prismaClient.transaction.createMany({
      data: transactions
    })
}

const getTransactions = async () => prismaClient.transaction.findMany({ include: { type: true }});

export { uploadTransactions, getTransactions }
import { Request, Response } from 'express'
import * as transactionService from '../services/transactionService'

const uploadTransactions = async (req: Request, res: Response) => {
  try {
    const path = req.file?.path;
    if (!path) return res.status(400).json({ error: 'File path error' });

    await transactionService.uploadTransactions(path)

    return res.status(201).json({ message: 'Transactions were inserted'})

  } catch (error) {
    return res.status(500).json({ error: 'File is not in the correct format'})
  }
}

const getTransactions = (_req: Request, res: Response) => res.json('endpoint / GET')

export { uploadTransactions, getTransactions }
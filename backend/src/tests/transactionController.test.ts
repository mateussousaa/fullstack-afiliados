import request from 'supertest';
import { app } from '../app';
import * as transactionService from '../services/transactionService';

jest.mock('../services/transactionService');

describe('Transaction Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('POST /uploadTransactions should return 201 with success message', async () => {
    (transactionService.uploadTransactions as jest.Mock).mockResolvedValueOnce(Promise<void>);

    const response = await request(app)
      .post('/upload')
      .attach('file', Buffer.from('some mock data'), {
        filename: 'sales.txt',
      });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'Transactions were inserted' });
  });

  test('POST /upload should return 500 with error message when file path is missing', async () => {
    (transactionService.uploadTransactions as jest.Mock).mockRejectedValueOnce(undefined);

    const response = await request(app).post('/upload');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'File is required' });
  });
});

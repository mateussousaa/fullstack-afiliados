import { Router } from 'express'
import { getTransactions, uploadTransactions } from './controllers/transactionController';
import multer from 'multer';
import { validateFile } from './middlewares/validateFile';

const upload = multer({ dest: 'uploads/'})

const routes = Router()

routes.get('/', getTransactions)

routes.post('/upload', upload.single('file'), validateFile, uploadTransactions)

export { routes }
import express, { Application } from "express"
import cors from 'cors'
import { routes } from './routes'

const app: Application = express()

app.use(cors({
  origin: 'localhost:3000'
}))

app.use(express.json())
app.use(routes)

export { app }
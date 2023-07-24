import { Router, Request, Response } from 'express'

const routes = Router();

routes.post('/upload', (req: Request, res: Response) => res.json('endpoint / POST'))

routes.get('/', (req: Request, res: Response) => res.json('endpoint / GET'))

export { routes }
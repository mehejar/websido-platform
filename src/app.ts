/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { userRoutes } from './app/modules/user/user.routes'



const app: Application = express()
// const port = 3000
app.use(express.json())
app.use(cors())

// Application routes
app.use('/api/users', userRoutes)



export const getAController = (req: Request, res: Response) => {
    res.send('Hello Websido!')
}

app.get('/', getAController)

app.use(globalErrorHandler);



export default app

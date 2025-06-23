import express, { Application, Request, Response } from 'express'
import { booksRoutes } from './app/controllers/books.controller'


const app : Application = express()



app.use(express.json())
app.use('/', booksRoutes)



app.get('/', (req : Request, res : Response) => {
  res.send('Hello....!!!')
})


export default app;
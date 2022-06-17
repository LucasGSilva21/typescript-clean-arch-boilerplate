import { Router } from 'express'
import { bookRoutes } from './book-route'

const routes = Router()

routes.use('/books', bookRoutes)

export { routes }

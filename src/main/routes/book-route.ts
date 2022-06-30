import { Router } from 'express'
import multer from 'multer'
import { adaptRoute } from '../../infra/adapters/express-route-adapter'
import {
  makeCreateBookController,
  makeDeleteBookController,
  makeFindAllBookController,
  makeFindByIdBookController
} from '../factories/controllers'

const bookRoutes = Router()
const storage = multer.memoryStorage()
const uploadMiddleware = multer({ storage })

bookRoutes.post('/', uploadMiddleware.single('file'), adaptRoute(makeCreateBookController()))
bookRoutes.get('/:id', adaptRoute(makeFindByIdBookController()))
bookRoutes.get('/', adaptRoute(makeFindAllBookController()))
bookRoutes.delete('/:id', adaptRoute(makeDeleteBookController()))

export { bookRoutes }

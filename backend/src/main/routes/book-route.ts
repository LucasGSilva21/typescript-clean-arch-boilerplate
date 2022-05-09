import { Router } from 'express'
import multer from 'multer'
import { adaptRoute } from '../../infra/adapters/express-route-adapter'
import { makeCreateBookController } from '../factories/controllers/create-book-controller-factory'

const bookRoutes = Router()
const storage = multer.memoryStorage()
const uploadMiddleware = multer({ storage })

bookRoutes.post('/', uploadMiddleware.single('file'), adaptRoute(makeCreateBookController()))

export { bookRoutes }

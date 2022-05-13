import { CreateBookController } from '../../../application/controllers/book/create-book-controller'
import { CreateBookUseCase } from '../../../application/usecases/book/create-book-usecase'
import { PgCreateBookRepository } from '../../../infra/database/postgres/repositories/create-book-pg-repository'
import { LocalUploaderHelper } from '../../../infra/upload/local-uploader-helper'

export const makeCreateBookController = () => {
  const pgCreateBookRepository = new PgCreateBookRepository()
  const localUploaderHelper = new LocalUploaderHelper()
  const createBookUseCase = new CreateBookUseCase(pgCreateBookRepository, localUploaderHelper)
  const createBookController = new CreateBookController(createBookUseCase)
  return createBookController
}

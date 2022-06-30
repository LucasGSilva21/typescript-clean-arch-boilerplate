import { CreateBookController } from '../../../presentation/controllers/book'
import { CreateBookUseCase } from '../../../application/usecases/book/create-book-usecase'
import { CreateBookValidation } from '../../../application/validation/validators/book'
import { PgCreateBookRepository } from '../../../infra/database/postgres/repositories/create-book-pg-repository'
import { LocalUploaderHelper } from '../../../infra/upload/local-uploader-helper'

export const makeCreateBookController = () => {
  const pgCreateBookRepository = new PgCreateBookRepository()
  const localUploaderHelper = new LocalUploaderHelper()
  const createBookValidation = new CreateBookValidation()
  const createBookUseCase = new CreateBookUseCase(pgCreateBookRepository, localUploaderHelper, createBookValidation)
  const createBookController = new CreateBookController(createBookUseCase)
  return createBookController
}

import { CreateBookController } from '../../../application/controllers/book/create-book-controller'
import { CreateBookUseCase } from '../../../application/usecases/book/create-book-usecase'
import { BookInMemoryRepository } from '../../../infra/database/in-memory/repositories/book-in-memory-repository'
import { LocalUploaderHelper } from '../../../infra/upload/local-uploader-helper'

export const makeCreateBookController = () => {
  const bookInMemoryRepository = new BookInMemoryRepository()
  const localUploaderHelper = new LocalUploaderHelper()
  const createBookUseCase = new CreateBookUseCase(bookInMemoryRepository, localUploaderHelper)
  const createBookController = new CreateBookController(createBookUseCase)
  return createBookController
}

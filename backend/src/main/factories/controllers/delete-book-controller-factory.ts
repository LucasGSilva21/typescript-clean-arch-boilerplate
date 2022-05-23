import { DeleteBookController } from '../../../application/controllers/book'
import { DeleteBookUseCase } from '../../../application/usecases/book'
import { PgFindByIdBookRepository, PgDeleteBookRepository } from '../../../infra/database/postgres/repositories'

export const makeDeleteBookController = () => {
  const pgFindByIdBookRepository = new PgFindByIdBookRepository()
  const pgDeleteBookRepository = new PgDeleteBookRepository()
  const deleteBookUseCase = new DeleteBookUseCase(pgDeleteBookRepository, pgFindByIdBookRepository)
  const deleteBookController = new DeleteBookController(deleteBookUseCase)
  return deleteBookController
}

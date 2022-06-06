import { FindAllBookController } from '../../../presentation/controllers/book'
import { FindAllBookUseCase } from '../../../application/usecases/book'
import { PgFindAllBookRepository } from '../../../infra/database/postgres/repositories'

export const makeFindAllBookController = () => {
  const pgFindAllBookRepository = new PgFindAllBookRepository()
  const findAllBookUseCase = new FindAllBookUseCase(pgFindAllBookRepository)
  const findAllBookController = new FindAllBookController(findAllBookUseCase)
  return findAllBookController
}

import { FindByIdBookController } from '../../../application/controllers/book'
import { FindByIdBookUseCase } from '../../../application/usecases/book'
import { PgFindByIdBookRepository } from '../../../infra/database/postgres/repositories'

export const makeFindByIdBookController = () => {
  const pgFindByIdBookRepository = new PgFindByIdBookRepository()
  const findByIdBookUseCase = new FindByIdBookUseCase(pgFindByIdBookRepository)
  const findByIdBookController = new FindByIdBookController(findByIdBookUseCase)
  return findByIdBookController
}

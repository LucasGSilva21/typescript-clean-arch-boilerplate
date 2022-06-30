import { Book } from '../../../../domain/entities/book'
import { FindByIdBookRepository } from '../../../../application/repositories/book'
import { PgRepository } from '../helpers/repository'
import { PgBook } from '../entities/book'

export class PgFindByIdBookRepository extends PgRepository implements FindByIdBookRepository {
  async findById (id: string): Promise<Book> {
    const pgBookRepo = this.getRepository(PgBook)

    const book = pgBookRepo.findOne({
      where: { id }
    })

    return book
  }
}

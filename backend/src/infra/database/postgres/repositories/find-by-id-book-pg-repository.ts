import { Book } from '../../../../domain/entities/book'
import { FindByIdRepository } from '../../../../application/protocols/repositories/book'
import { PgRepository } from '../helpers/repository'
import { PgBook } from '../entities/book'

export class PgFindByIdBookRepository extends PgRepository implements FindByIdRepository {
  async findById (id: string): Promise<Book> {
    const pgBookRepo = this.getRepository(PgBook)

    const book = pgBookRepo.findOne({
      where: { id }
    })

    return book
  }
}

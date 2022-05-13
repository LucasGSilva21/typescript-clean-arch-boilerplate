import { Book } from '../../../../domain/entities/book'
import { FindAllRepository } from '../../../../application/protocols/repositories/book'
import { PgRepository } from '../helpers/repository'
import { PgBook } from '../entities/book'

export class PgFindAllBookRepository extends PgRepository implements FindAllRepository {
  async findAll (): Promise<Book[]> {
    const pgBookRepo = this.getRepository(PgBook)

    const books = pgBookRepo.find()

    return books
  }
}

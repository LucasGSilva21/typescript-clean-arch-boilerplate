
import { Book, CreateBookData } from '../../../../domain/entities/book'
import { CreateBookRepository } from '../../../../application/protocols/repositories/book'
import { PgRepository } from '../helpers/repository'
import { PgBook } from '../entities/book'

export class PgCreateBookRepository extends PgRepository implements CreateBookRepository {
  async create (createBookData: CreateBookData): Promise<Book> {
    const pgBookRepo = this.getRepository(PgBook)

    const bookCreate = pgBookRepo.create(createBookData)

    const book = await pgBookRepo.save(bookCreate)

    return book
  }
}

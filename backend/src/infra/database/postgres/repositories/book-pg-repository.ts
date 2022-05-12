
import { Book, CreateBookData } from '../../../../domain/entities/book'
import { BookRepository } from '../../../../application/protocols/repositories/book-repository'
import { PgRepository } from '../helpers/repository'
import { PgBook } from '../entities/book'

export class PgCreateBookRepository extends PgRepository implements BookRepository {
  async create (createBookData: CreateBookData): Promise<Book> {
    const pgBookRepo = this.getRepository(PgBook)

    const bookCreate = pgBookRepo.create(createBookData)

    const book = await pgBookRepo.save(bookCreate)

    return book
  }
}


import { Book } from '../../../../domain/entities/book'
import { CreateBookRepository } from '../../../../application/repositories/book'
import { PgRepository } from '../helpers/repository'
import { PgBook } from '../entities/book'

export class PgCreateBookRepository extends PgRepository implements CreateBookRepository {
  async create (book: Book): Promise<Book> {
    const pgBookRepo = this.getRepository(PgBook)

    const bookCreate = pgBookRepo.create(book)

    const bookData = await pgBookRepo.save(bookCreate)

    return new Book(bookData)
  }
}

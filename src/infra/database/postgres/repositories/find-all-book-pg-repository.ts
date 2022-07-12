import { Book } from '../../../../domain/entities/book'
import { FindAllBookRepository } from '../../../../application/repositories/book'
import { PgRepository } from '../helpers/repository'
import { PgBook } from '../entities/book'

export class PgFindAllBookRepository extends PgRepository implements FindAllBookRepository {
  async findAll (): Promise<Book[]> {
    const pgBookRepo = this.getRepository(PgBook)

    const booksData = await pgBookRepo.find()

    return booksData.map(bookData => new Book(bookData))
  }
}

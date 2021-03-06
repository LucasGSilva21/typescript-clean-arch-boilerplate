import { Book, BookData } from '../../../../../../src/domain/entities/book'
import { CreateBookRepository } from '../../../../../../src/application/repositories/book'
import { mockBook } from '../../../domain/mock-book'

export const mockCreateBookRepository = (): CreateBookRepository => {
  class CreateBookRepositoryStub implements CreateBookRepository {
    async create (bookData: BookData): Promise<Book> {
      return mockBook()
    }
  }

  return new CreateBookRepositoryStub()
}

import { Book, CreateBookData } from '../../../../src/domain/entities/book'
import { CreateBookRepository } from '../../../../src/application/protocols/repositories/book'
import { mockBook } from '../domain/mock-book'

export const mockCreateBookRepository = (): CreateBookRepository => {
  class CreateBookRepositoryStub implements CreateBookRepository {
    async create (createBookData: CreateBookData): Promise<Book> {
      return mockBook()
    }
  }

  return new CreateBookRepositoryStub()
}

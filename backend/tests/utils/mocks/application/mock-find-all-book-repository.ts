import { Book } from '../../../../src/domain/entities/book'
import { FindAllRepository } from '../../../../src/application/protocols/repositories/book'
import { mockBook } from '../domain/mock-book'

export const mockFindAllBookRepository = (): FindAllRepository => {
  class FindAllBookRepositoryStub implements FindAllRepository {
    async findAll (): Promise<Book[]> {
      return [
        mockBook(),
        mockBook()
      ]
    }
  }

  return new FindAllBookRepositoryStub()
}

import { Book } from '../../../../../../src/domain/entities/book'
import { FindAllBookRepository } from '../../../../../../src/application/repositories/book'
import { mockBook } from '../../../domain/mock-book'

export const mockFindAllBookRepository = (): FindAllBookRepository => {
  class FindAllBookRepositoryStub implements FindAllBookRepository {
    async findAll (): Promise<Book[]> {
      return [
        mockBook(),
        mockBook()
      ]
    }
  }

  return new FindAllBookRepositoryStub()
}

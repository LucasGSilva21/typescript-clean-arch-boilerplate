import { Book } from '../../../../../../src/domain/entities/book'
import { FindByIdBookRepository } from '../../../../../../src/application/repositories/book'
import { mockBook } from '../../../domain/mock-book'

export const mockFindByIdBookRepository = (): FindByIdBookRepository => {
  class FindByIdBookRepositoryStub implements FindByIdBookRepository {
    async findById (id: string): Promise<Book> {
      return mockBook()
    }
  }

  return new FindByIdBookRepositoryStub()
}

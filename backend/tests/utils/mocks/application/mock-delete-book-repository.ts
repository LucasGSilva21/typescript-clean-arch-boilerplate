import { DeleteBookRepository } from '../../../../src/application/protocols/repositories/book'

export const mockDeleteBookRepository = (): DeleteBookRepository => {
  class DeleteBookRepositoryStub implements DeleteBookRepository {
    async delete (id: string): Promise<void> {
      Promise.resolve(null)
    }
  }

  return new DeleteBookRepositoryStub()
}

import { DeleteBook } from '../../../domain/usecases/book'
import { DeleteBookRepository, FindByIdRepository } from '../../protocols/repositories/book'

export class DeleteBookUseCase implements DeleteBook {
  constructor (
    private readonly deleteBookRepository: DeleteBookRepository,
    private readonly findByIdRepository: FindByIdRepository
  ) {}

  async delete (id: string): Promise<void> {
    const book = await this.findByIdRepository.findById(id)
    if (!book) {
      throw new Error('Book not found')
    }
    await this.deleteBookRepository.delete(id)
  }
}

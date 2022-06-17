import { DeleteBook } from '../../../domain/usecases/book'
import { DeleteBookRepository, FindByIdBookRepository } from '../../repositories/book'

export class DeleteBookUseCase implements DeleteBook {
  constructor (
    private readonly deleteBookRepository: DeleteBookRepository,
    private readonly findByIdBookRepository: FindByIdBookRepository
  ) {}

  async delete (id: string): Promise<boolean> {
    const book = await this.findByIdBookRepository.findById(id)

    if (!book) {
      return false
    }

    await this.deleteBookRepository.delete(id)

    return true
  }
}

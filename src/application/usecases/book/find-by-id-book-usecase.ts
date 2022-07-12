import { Book } from '../../../domain/entities/book'
import { FindByIdBook } from '../../../domain/usecases/book'
import { FindByIdBookRepository } from 'application/repositories/book'

export class FindByIdBookUseCase implements FindByIdBook {
  constructor (
    private readonly findByIdBookRepository: FindByIdBookRepository
  ) {}

  async findById (id: string): Promise<Book> {
    const book = this.findByIdBookRepository.findById(id)

    return book
  }
}

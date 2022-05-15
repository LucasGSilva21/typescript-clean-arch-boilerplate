import { Book } from 'domain/entities/book'
import { FindByIdBook } from 'domain/usecases/book'
import { FindByIdRepository } from 'application/protocols/repositories/book'

export class FindByIdBookUseCase implements FindByIdBook {
  constructor (
    private readonly findByIdRepository: FindByIdRepository
  ) {}

  async findById (id: string): Promise<Book> {
    const book = this.findByIdRepository.findById(id)

    return book
  }
}

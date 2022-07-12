import { Book } from '../../../domain/entities/book'
import { FindAllBook } from '../../../domain/usecases/book'
import { FindAllBookRepository } from 'application/repositories/book'

export class FindAllBookUseCase implements FindAllBook {
  constructor (
    private readonly findAllBookRepository: FindAllBookRepository
  ) {}

  async findAll (): Promise<Book[]> {
    const books = this.findAllBookRepository.findAll()

    return books
  }
}

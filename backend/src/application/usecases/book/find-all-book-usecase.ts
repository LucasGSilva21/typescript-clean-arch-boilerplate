import { Book } from 'domain/entities/book'
import { FindAllBook } from 'domain/usecases/book'
import { FindAllRepository } from 'application/protocols/repositories/book'

export class FindAllBookUseCase implements FindAllBook {
  constructor (
    private readonly findAllRepository: FindAllRepository
  ) {}

  async findAll (): Promise<Book[]> {
    const books = this.findAllRepository.findAll()

    return books
  }
}

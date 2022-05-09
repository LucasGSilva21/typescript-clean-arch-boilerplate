import { Book, CreateBookData } from 'domain/entities/book'
import { BookRepository } from '../../../../application/protocols/repositories/book-repository'

export class BookInMemoryRepository implements BookRepository {
  async create (createBookData: CreateBookData): Promise<Book> {
    return Promise.resolve({
      id: 'valid_id',
      title: 'valid_title',
      description: 'valid_description'
    })
  }
}

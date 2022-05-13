import { Book, CreateBookData } from 'domain/entities/book'
import { CreateBookRepository } from '../../../../application/protocols/repositories/book'

export class BookInMemoryRepository implements CreateBookRepository {
  async create (createBookData: CreateBookData): Promise<Book> {
    return Promise.resolve({
      id: `${Date.now()}`,
      title: createBookData.title,
      description: createBookData.description,
      imagePath: createBookData.imagePath
    })
  }
}

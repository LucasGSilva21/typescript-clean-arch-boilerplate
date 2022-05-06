import { Book, CreateBookData } from '../../entities/Book'

export interface CreateBook {
  create(createBookData: CreateBookData): Promise<Book>
}

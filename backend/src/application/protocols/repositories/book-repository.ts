import { Book, CreateBookData } from '../../../domain/entities/Book'

export interface BookRepository {
  create(createBookData: CreateBookData): Promise<Book>
}

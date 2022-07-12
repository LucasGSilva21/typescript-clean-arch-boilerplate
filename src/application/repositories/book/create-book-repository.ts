import { Book, BookData } from '../../../domain/entities/book'

export interface CreateBookRepository {
  create (bookData: BookData): Promise<Book>
}

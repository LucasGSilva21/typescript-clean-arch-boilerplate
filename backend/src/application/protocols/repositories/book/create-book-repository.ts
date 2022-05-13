import { Book, CreateBookData } from '../../../../domain/entities/book'

export interface CreateBookRepository {
  create (createBookData: CreateBookData): Promise<Book>
}

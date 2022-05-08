import { Book, CreateBookData } from '../../../domain/entities/book'

export interface BookRepository {
  create(createBookData: CreateBookData): Promise<Book>
}

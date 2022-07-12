import { Book } from '../../../domain/entities/book'

export interface FindAllBookRepository {
  findAll (): Promise<Book[]>
}

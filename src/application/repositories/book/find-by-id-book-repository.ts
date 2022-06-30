import { Book } from 'domain/entities/book'

export interface FindByIdBookRepository {
  findById (id: string): Promise<Book>
}

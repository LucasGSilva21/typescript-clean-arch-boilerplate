import { Book } from 'domain/entities/book'

export interface FindByIdRepository {
  findById (id: string): Promise<Book>
}

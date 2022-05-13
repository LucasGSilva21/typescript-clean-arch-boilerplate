import { Book } from 'domain/entities/book'

export interface FindAllRepository {
  findAll (): Promise<Book[]>
}

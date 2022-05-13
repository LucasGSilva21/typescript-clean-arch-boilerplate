import { Book } from '../../entities/book'

export interface FindAllBook {
  findAll (): Promise<Book[]>
}

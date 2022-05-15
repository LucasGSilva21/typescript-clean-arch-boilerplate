import { Book } from '../../entities/book'

export interface FindByIdBook {
  findById (id: string): Promise<Book>
}

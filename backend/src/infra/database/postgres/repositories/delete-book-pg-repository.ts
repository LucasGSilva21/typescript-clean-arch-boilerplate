import { DeleteBookRepository } from '../../../../application/protocols/repositories/book'
import { PgRepository } from '../helpers/repository'
import { PgBook } from '../entities/book'

export class PgDeleteBookRepository extends PgRepository implements DeleteBookRepository {
  async delete (id: string): Promise<void> {
    const pgBookRepo = this.getRepository(PgBook)

    pgBookRepo.delete(id)
  }
}

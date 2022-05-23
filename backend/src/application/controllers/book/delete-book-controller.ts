import { Controller, HttpRequest, HttpResponse } from 'application/protocols/presentation'
import { DeleteBook } from '../../../domain/usecases/book'

export class DeleteBookController implements Controller {
  constructor (
    private readonly deleteBook: DeleteBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params
    await this.deleteBook.delete(id)
    return {
      statusCode: 204
    }
  }
}

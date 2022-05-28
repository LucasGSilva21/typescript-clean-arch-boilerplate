import { Controller, HttpRequest, HttpResponse } from 'application/protocols/presentation'
import { DeleteBook } from '../../../domain/usecases/book'

export class DeleteBookController implements Controller {
  constructor (
    private readonly deleteBook: DeleteBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params
    const result = await this.deleteBook.delete(id)

    if (!result) {
      return {
        statusCode: 400,
        body: {
          error: 'Book not found'
        }
      }
    }

    return {
      statusCode: 204
    }
  }
}

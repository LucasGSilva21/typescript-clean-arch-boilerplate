import { Controller, HttpRequest, HttpResponse } from 'application/protocols/presentation'
import { DeleteBook } from '../../../domain/usecases/book'
import { InvalidParamError } from '../../errors'
import { noContent, badRequest, serverError } from '../../protocols/helpers/http-helper'

export class DeleteBookController implements Controller {
  constructor (
    private readonly deleteBook: DeleteBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const result = await this.deleteBook.delete(id)

      if (!result) {
        return badRequest(new InvalidParamError('id'))
      }

      return noContent()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}

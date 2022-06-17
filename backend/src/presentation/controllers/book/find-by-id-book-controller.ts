import { Controller, HttpRequest, HttpResponse } from 'presentation/protocols'
import { FindByIdBook } from '../../../domain/usecases/book'
import { InvalidParamError } from '../../../application/errors'
import { ok, badRequest, serverError } from '../../helpers/http-helper'

export class FindByIdBookController implements Controller {
  constructor (
    private readonly findByIdBook: FindByIdBook
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const book = await this.findByIdBook.findById(id)

      if (!book) {
        return badRequest(new InvalidParamError('id'))
      }

      return ok(book)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}

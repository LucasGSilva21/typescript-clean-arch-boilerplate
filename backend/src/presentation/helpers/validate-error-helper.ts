import { badRequest, serverError } from './http-helper'
import { HttpResponse } from '../protocols'

export const validateErrorHelper = (error: Error): HttpResponse => {
  if (
    error.name === 'InvalidParamsError' ||
    error.name === 'MissingParamError'
  ) {
    return badRequest(error)
  }

  return serverError(error as Error)
}

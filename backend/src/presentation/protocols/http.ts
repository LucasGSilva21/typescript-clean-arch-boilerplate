export type HttpRequest = {
  body?: any
  headers?: any
  params?: any
  file?: any
}

export type HttpResponse = {
  statusCode: number
  body?: any
}

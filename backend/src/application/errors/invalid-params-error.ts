export class InvalidParamsError extends Error {
  constructor (errors: any) {
    super('Invalid Params Error')
    this.name = 'InvalidParamsError'
    this.message = errors
  }
}

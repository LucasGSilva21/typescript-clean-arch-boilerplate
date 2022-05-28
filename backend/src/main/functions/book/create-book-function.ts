import { parse } from 'aws-multipart-parser'
import { PgConnection } from '../../../infra/database/postgres/helpers/connection'
import { makeCreateBookController } from '../../factories/controllers'

const createBookController = makeCreateBookController()

export const run = async (event: any) => {
  await PgConnection.getInstance().connect()
    .then(async () => {
      console.log('Connected to database')
    })
    .catch(console.error)

  const formData = parse(event, true)
  const result = await createBookController.handle({ body: formData })

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result.body)
  }
}

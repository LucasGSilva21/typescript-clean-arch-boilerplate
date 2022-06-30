import { parse } from 'aws-multipart-parser'
import { PgConnection } from '../../../infra/database/postgres/helpers/connection'
import { makeCreateBookController } from '../../factories/controllers'

const createBookController = makeCreateBookController()

export const run = async (event: any) => {
  try {
    await PgConnection.getInstance().connect()
    const formData = parse(event, true)
    const { statusCode, body } = await createBookController.handle({ body: formData })
    return {
      statusCode,
      body: JSON.stringify(body)
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: 'Internal Server Error'
    }
  }
}

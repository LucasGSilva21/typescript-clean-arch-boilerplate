import { PgConnection } from '../../../infra/database/postgres/helpers/connection'
import { makeFindByIdBookController } from '../../factories/controllers'

const findByIdBookController = makeFindByIdBookController()

export const run = async (event: any) => {
  try {
    await PgConnection.getInstance().connect()
    const { id } = event.pathParameters
    const { statusCode, body } = await findByIdBookController.handle({ params: { id } })
    return {
      statusCode,
      body: JSON.stringify(body)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal Server Error'
    }
  }
}

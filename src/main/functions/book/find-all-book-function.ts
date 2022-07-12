import { PgConnection } from '../../../infra/database/postgres/helpers/connection'
import { makeFindAllBookController } from '../../factories/controllers'

const findAllBookController = makeFindAllBookController()

export const run = async (event: any) => {
  try {
    await PgConnection.getInstance().connect()
    const { statusCode, body } = await findAllBookController.handle({})
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

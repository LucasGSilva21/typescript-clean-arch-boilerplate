import { PgConnection } from '../../../infra/database/postgres/helpers/connection'
import { makeDeleteBookController } from '../../factories/controllers'

const deleteBookController = makeDeleteBookController()

export const run = async (event: any) => {
  try {
    await PgConnection.getInstance().connect()
    const { id } = event.pathParameters
    const { statusCode, body } = await deleteBookController.handle({ params: { id } })
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

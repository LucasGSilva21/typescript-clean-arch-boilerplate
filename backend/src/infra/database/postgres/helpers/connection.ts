import { ConnectionNotFoundError, TransactionNotFoundError } from './errors'
import { DbTransaction } from '../../../protocols/db-transaction'
import { ObjectType, QueryRunner, Repository, DataSource } from 'typeorm'
import { PgBook } from '../entities/book'

export class PgConnection implements DbTransaction {
  private static instance?: PgConnection
  private query?: QueryRunner
  private dataSource?: DataSource

  private constructor () {}

  static getInstance (): PgConnection {
    if (PgConnection.instance === undefined) PgConnection.instance = new PgConnection()
    return PgConnection.instance
  }

  async connect (): Promise<void> {
    if (!this.dataSource?.isInitialized) {
      this.dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [PgBook],
        migrations: ['../migrations/*.{js,ts}'],
        synchronize: true
      })
      await this.dataSource.initialize()
    }
  }

  async disconnect (): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError()
    await this.dataSource.destroy()
    this.query = undefined
    this.dataSource = undefined
  }

  async openTransaction (): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError()
    this.query = this.dataSource.createQueryRunner()
    await this.query.startTransaction()
  }

  async closeTransaction (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.release()
  }

  async commit (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.commitTransaction()
  }

  async rollback (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.rollbackTransaction()
  }

  getRepository<Entity> (entity: ObjectType<Entity>): Repository<Entity> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError()
    if (this.query !== undefined) return this.query.manager.getRepository(entity)
    return this.dataSource.getRepository(entity)
  }

  async runMigrations (): Promise<void> {
    await this.dataSource?.runMigrations()
  }
}

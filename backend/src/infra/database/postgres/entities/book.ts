import { Entity, Column } from 'typeorm'
import { BaseEntity } from '../helpers/base-entity'

@Entity({ name: 'books' })
export class PgBook extends BaseEntity {
  @Column()
    title: string

  @Column()
    description: string

  @Column({ nullable: true })
    author?: string

  @Column({ name: 'publication_date', nullable: true })
    publicationDate?: Date

  @Column({ nullable: true })
    imagePath?: string
}

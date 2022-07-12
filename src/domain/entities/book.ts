import { v4 as uuid } from 'uuid'

export interface BookData {
  id?: string,
  title: string
  description: string
  author?: string
  publicationDate?: Date
  imagePath?: string
}

export class Book {
  private _id: string
  private _title: string
  private _description: string
  private _author?: string
  private _publicationDate?: Date
  private _imagePath?: string

  constructor ({
    id = uuid(),
    title,
    description,
    author,
    publicationDate,
    imagePath
  }: BookData) {
    this._id = id
    this._title = title
    this._description = description
    this._author = author
    this._publicationDate = publicationDate
    this._imagePath = imagePath
  }

  get id (): string {
    return this._id
  }

  get title (): string {
    return this._title
  }

  get description (): string {
    return this._description
  }

  get author (): string {
    return this._author
  }

  get publicationDate (): Date {
    return this._publicationDate
  }

  get imagePath (): string {
    return this._imagePath
  }

  changeImagePath (imagePath: string): void {
    this._imagePath = imagePath
  }
}

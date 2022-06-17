import {
  Length,
  IsString,
  IsDate,
  IsNotEmpty,
  IsOptional
} from 'class-validator'

export class CreateBookModel {
  @IsString()
  @Length(3, 50)
  @IsNotEmpty()
    title: string

  @IsString()
  @IsNotEmpty()
    description: string

  @IsString()
  @IsOptional()
    author?: string

  @IsDate()
  @IsOptional()
    publicationDate?: Date

  @IsString()
  @IsOptional()
    imagePath?: string
}

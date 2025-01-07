import { IsNotEmpty, IsOptional } from 'class-validator'

export class CreateUpdateProductDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  desciption: string

  @IsNotEmpty()
  price: string

  @IsOptional()
  image?: string
}

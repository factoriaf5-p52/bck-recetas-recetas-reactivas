/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export class CreateCommentDto {
  @ApiProperty({ example: 'Me encantó' })
  readonly title: string;

  @ApiProperty({
    example: 3,
  })
  readonly stars: number;

  @ApiProperty({
    example:
      'El resultado final es maravilloso, he podido disfrutar esta receta acompañada de vino y la mezcla de sabores es increible.',
  })
  readonly comment: string;

  @ApiProperty({ example: '63d7873a3eb90db3ba4b52e1' })
  readonly user: ObjectId;
}
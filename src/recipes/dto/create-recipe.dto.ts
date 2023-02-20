/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class CreateRecipeDto {
  @ApiProperty({
    example: 'tostada',
  })
  title: string;

  @ApiProperty({
    example: 'rodaja de pan tostada',
  })
  description: string;

  @ApiProperty({
    example: '63d9049bee15be130124a938',
  })
  author: ObjectId;
  
  @ApiProperty({
    example: [
      "63d0e7a3d465ce8c3453c972",
    ]
  })
  ingredients: Array<ObjectId>;

  @ApiProperty({
    example: 2,
  })
  time: number;

  @ApiProperty({
    example: false,
  })
  is_private: boolean;

  @ApiProperty({
    example: ['vegana', 'fácil', 'desayuno'],
  })
  tags: Array<string>;
}

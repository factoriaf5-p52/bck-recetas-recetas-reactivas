import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeDto {@ApiProperty({
    example: 'tostada',
  })
  title: string;

  @ApiProperty({
    example: 'rodaja de pan tostada',
  })
  description: string;

  @ApiProperty({
    example: 'Lola',
  })
  username: string;

  @ApiProperty({
    example: 2
  })
  time: number;

  @ApiProperty({
    example: [
      "pan", "aceite", "margarina", "mermelada"
    ]
  })
  ingredients: Array<string>;

  @ApiProperty({
    example: false
  })
  is_private: boolean;

  @ApiProperty({
    example: ["vegana", "fácil", "desayuno"]
  })
  tags: Array<string>
}

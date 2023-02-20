import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
  @ApiProperty({
    example: 'harina de trigo',
  })
  name: string;

  @ApiProperty({
    example: 'gramos',
  })
  measure_unit: string;

  @ApiProperty({
    example: 'harina',
  })
  type: string;
}

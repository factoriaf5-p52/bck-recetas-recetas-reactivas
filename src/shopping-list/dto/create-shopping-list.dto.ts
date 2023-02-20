import { ApiProperty } from '@nestjs/swagger';

export class CreateShoppingListDto {
  @ApiProperty({
    example: ['manteca', 1]
  })
  ingredients: [{
    name:string,
    amount:number
  }]

}

import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {

    @ApiProperty({ example: "harina" })
    readonly name: string;

    @ApiProperty({ example: "grams" })
    readonly measure_unit: string;

}

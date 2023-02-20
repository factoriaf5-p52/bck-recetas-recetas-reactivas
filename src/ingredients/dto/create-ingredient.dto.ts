import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {

    @ApiProperty({ example: "0000"})
    readonly _id: string;

    @ApiProperty({ example: "farina" })
    readonly name: string;

    @ApiProperty({ example: "grams" })
    readonly measure_unit: string;

}

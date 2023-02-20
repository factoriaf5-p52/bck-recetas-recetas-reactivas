import { ApiProperty } from '@nestjs/swagger';

export class CreateBadgeDto {

    @ApiProperty({ example: "0000"})
    readonly _id: string;

    @ApiProperty({ example: "go vegan"})
    readonly name: string;

    @ApiProperty({ example: "post 10 vegan recipes"})
    readonly description: string;

    @ApiProperty({ example: [
        "be a registered user", "post 10 vegan recipies"
    ] })
    readonly requirements: Array<string>;
}

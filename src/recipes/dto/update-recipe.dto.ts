import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {    
    @ApiProperty({
        example: 3
    })
    score: number;
}

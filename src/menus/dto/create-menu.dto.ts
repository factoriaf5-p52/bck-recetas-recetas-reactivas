import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { Recipe } from 'src/recipes/interfaces/recipe.interface';

export class CreateMenuDto {
    @ApiProperty({
        example: 'recetas veganas',
      })
      title: string;
    
      @ApiProperty({
        example: 'comida sana para toda la semana',
      })
      description: string;
    
      @ApiProperty({
        example: 'vegana',
      })
      type: Array <string>;

    //   COPIAR ID DE USUARIO CUANDO PONGAMOS NPM START
      @ApiProperty({
        example: [
          "63d0e7a3d465ce8c3453c972",
        ]
      })
      user: ObjectId;
    
      @ApiProperty({
        example: 'budin de banana'
      })
      recipes: Array<Recipe>;
    
      
}

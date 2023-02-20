import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
    @ApiProperty({
        example: 'Navidad',
      })
      title: string;
    
      @ApiProperty({
        example: 'Las recetas que le encantarán a la familia ',
      })
      description: string;

      @ApiProperty({
        example: 'juancookie',
      })
      owner: string;
    
    


}

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'juancoookie',
  })
  username: string;

  @ApiProperty({
    example: '123456',
  })
  password: string;

  @ApiProperty({
    example: ['harina de garbanzo', 1, 'kilo'],
  })
  shopping_list: Array<any>;

  @ApiProperty({
    example: 'juancoookie@recipes.com',
  })
  email: string;
}

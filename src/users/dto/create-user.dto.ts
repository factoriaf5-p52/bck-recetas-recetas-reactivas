/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({ example: 'juancoookie' })
  readonly username: string;

  @ApiProperty({ example: '123456' })
  password: string;

  @ApiProperty({ example: 'juancoookie@recipes.com' })
  readonly email: string;
}

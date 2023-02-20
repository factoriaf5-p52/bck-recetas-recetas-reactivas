import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty({
    example: ['harina de garbanzo', 1, 'kilo'],
  })
  shopping_list: Array<any>;


}

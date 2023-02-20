import { Module } from '@nestjs/common';
import { MenuesService } from './menues.service';
import { MenuesController } from './menues.controller';
import { Menu, MenuSchema } from './schemas/menu.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Menu.name,
      schema: MenuSchema
    }])
  ],
  controllers: [MenuesController],
  providers: [MenuesService]
})
export class MenuesModule {}

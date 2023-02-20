import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListController } from './shopping-list.controller';
import { ShoppingList, ShoppingListSchema } from './schemas/shopping-list.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: ShoppingList.name,
      schema: ShoppingListSchema
    }])
  ],
  controllers: [ShoppingListController],
  providers: [ShoppingListService]
})
export class ShoppingListModule {}

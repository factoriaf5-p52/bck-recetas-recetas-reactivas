import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingList, ShoppingListDocument } from './schemas/shopping-list.schema';
import { Model } from 'mongoose';

@Injectable()
export class ShoppingListService {
  constructor(
    @InjectModel(ShoppingList.name)
    private readonly shoppingListModel: Model<ShoppingListDocument>,
  ) {}
  create(createShoppingListDto: CreateShoppingListDto) {
    return this.shoppingListModel.create(createShoppingListDto);
  }

  findAll() {
    return this.shoppingListModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingList`;
  }

  update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    return `This action updates a #${id} shoppingList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingList`;
  }
}

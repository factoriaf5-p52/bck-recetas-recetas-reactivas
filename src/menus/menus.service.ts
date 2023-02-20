import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu, MenuDocument } from './schemas/menu.schema';

@Injectable()
export class MenusService {
  constructor(
    @InjectModel(Menu.name) private readonly menuModel: Model<MenuDocument>,
  ) {}
  async create(createMenuDto: CreateMenuDto) {
    return this.menuModel.create(createMenuDto);
  }

  async findAll() {
    return this.menuModel
      .find({}, { _id: 0, __v: 0, is_private: 0 })
      .populate('recipes', 'title')
      .exec();
  }

  async findOne(id: string) {
    return this.menuModel
      .findOne({ _id: id }, { _id: 0, __v: 0, is_private: 0 })
      .populate('recipes', '-_id -__v  -author -description')
      .exec();
  }

  async update(id: string, updateMenuDto: UpdateMenuDto) {
    return this.menuModel.findOneAndUpdate({ _id: id }, updateMenuDto, {
      new: true,
    });
  }

  async removeMenu(id: string) {
    return this.menuModel.findByIdAndRemove({ _id: id }).exec();
  }

  async removeRecipeFromMenu (menuId: string, recipeId: string)
   {
    return this.menuModel.updateOne({ _id: menuId}, {$pull: {recipes: [recipeId]}})
    .exec();
  }
}



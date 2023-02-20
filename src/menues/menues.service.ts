import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu, MenuDocument } from 'src/menues/schemas/menu.schema';
import { Recipe, RecipeDocument } from 'src/recipes/schemas/recipe.schema';
import { Model } from 'mongoose';

@Injectable()
export class MenuesService {
  constructor(
    @InjectModel(Menu.name)
    private readonly menuModel: Model<MenuDocument>,
  ) {}

  create(createMenuDto: CreateMenuDto) {
    return this.menuModel.create(createMenuDto);
  }

  findAll() {
    return this.menuModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  async addRecipe (
    menuId: string,
    recipe: any,
  ): Promise<Menu> {
    const menu = await this.menuModel.findById(menuId);
    menu.recipes.push(recipe);
    return menu.save();
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient, IngredientDocument } from './schemas/ingredient.schema';
import { Model } from 'mongoose';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel(Ingredient.name)
    private readonly ingredientModel: Model<IngredientDocument>
  ) { }

  async create(createIngredientDto: CreateIngredientDto) {
    return this.ingredientModel.create(createIngredientDto);
  }

  async findAll() {
    return this.ingredientModel.find().exec();
  }

  async findOne(id: string) {
    return this.ingredientModel.findOne({ _id: id });
  }

  async update(id: string, updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientModel.findOneAndUpdate({ _id: id }, updateIngredientDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.ingredientModel.findByIdAndRemove({ _id: id }).exec();
  }
}

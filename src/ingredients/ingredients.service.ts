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
    private readonly ingredientModel: Model<IngredientDocument>,
  ) {}

  create(createIngredientDto: CreateIngredientDto) {
    return this.ingredientModel.create(createIngredientDto);
  }

  findAll() {
    return this.ingredientModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateRecipeDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
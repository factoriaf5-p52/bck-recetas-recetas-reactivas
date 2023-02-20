/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name)
    private readonly recipeModel: Model<RecipeDocument>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto) {
    return this.recipeModel.create(createRecipeDto);
  }

  async findAll() {
    // return this.recipeModel.find({})
    // .populate("ingredients comments.user", "name")
    return this.recipeModel.find({}, {"_id": 0, "__v": 0, "is_private": 0})
    .populate("ingredients", "name")
    .exec();
  }

  async findOne(id: string) {
    return this.recipeModel
    .findOne({ _id: id}, { "__v": 0, "is_private": 0})
    .populate("ingredients author comments.user", "-_id -__v -shopping_list -email -password")
    .exec()
  }

  async findOne2(id: string) {
    return this.recipeModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return this.recipeModel.findOneAndUpdate({ _id: id }, updateRecipeDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.recipeModel.findByIdAndRemove({ _id: id }).exec();
  }

  async addComment(id: string, comment: any) { 
    let commentary: RecipeDocument = await this.recipeModel.findById(id); 
    commentary.comments.push(comment); 
    commentary.save(); 
    return commentary;
  }



  async addIngredient (
    recipeId: string,
    ingredient: any,
  ): Promise<Recipe> {
    const recipe = await (await this.recipeModel.findById(recipeId)).populate('ingredients');
    recipe.ingredients.push(ingredient);
    return recipe.save();
}
}
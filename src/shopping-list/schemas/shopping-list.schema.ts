import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ingredient } from 'src/ingredients/schemas/ingredient.schema';
import { RecipeIngredient } from 'src/recipes/recipe-ingredient.interface';
import { User } from 'src/users/schemas/user.schema';

export type ShoppingListDocument = ShoppingList & Document;

@Schema()
export class ShoppingList {

  @Prop()
    ingredients: Array<RecipeIngredient>;

  @Prop()
    user: User;


}

export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);

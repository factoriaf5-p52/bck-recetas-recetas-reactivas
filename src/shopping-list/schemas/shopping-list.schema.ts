import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ingredient } from 'src/ingredients/interfaces/ingredient.interface';
import { User } from 'src/users/schemas/user.schema';

export type ShoppingListDocument = ShoppingList & Document;

@Schema()
export class ShoppingList {

  @Prop()
    ingredients: Array<Ingredient>;

  @Prop()
    user: User;


}

export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);

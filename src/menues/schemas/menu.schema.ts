import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Recipe } from 'src/recipes/interfaces/recipe.interface';


export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  type: string;

  @Prop()
  owner: string;

  @Prop()
  recipes: Array<Recipe>;
}


export const MenuSchema = SchemaFactory.createForClass(Menu);

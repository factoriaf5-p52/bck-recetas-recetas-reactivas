import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {@Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  username: string;

  @Prop()
  time: number;

  @Prop()
  ingredients: Array<string>;

  @Prop()
  is_private: boolean;
  
  @Prop()
  tags: Array<string>;

  @Prop()
  score: number;

  @Prop()
  views: number;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

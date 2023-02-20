/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { Ingredient } from 'src/ingredients/schema/ingredient.schema';
import { User } from 'src/users/schema/user.schema';
import { CommentSchema } from './comment.schema';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
/*   @Prop({ type: Object, unique: true })
  _id: ObjectId; */

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  author: ObjectId;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }])
  ingredients: Array<ObjectId>;

  @Prop()
  time: number;

  @Prop()
  is_private: boolean;
  
  @Prop()
  tags: Array<string>;

  @Prop()
  score: number;

  @Prop()
  views: number;

  @Prop([String]) 
  keywords: string[];

  @Prop([CommentSchema]) 
  comments: Comment[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

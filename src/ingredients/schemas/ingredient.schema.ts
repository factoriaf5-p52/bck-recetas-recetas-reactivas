import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IngredientDocument = Ingredient & Document;

@Schema()
export class Ingredient {
  @Prop()
  name: string;

  @Prop()
  measure_unit: string;

  @Prop()
  type: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);

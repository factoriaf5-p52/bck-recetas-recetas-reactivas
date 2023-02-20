import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';


export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  type: Array <string>;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user: ObjectId;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }])
  recipes: Array<ObjectId>;
  static title: string;


}


export const MenuSchema = SchemaFactory.createForClass(Menu);
/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Ingredient } from 'src/ingredients/schema/ingredient.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
/*   @Prop({ type: Object, unique: true })
  _id: ObjectId; */

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, match: /.+\@.+\..+/ })
  email: string;

  @Prop()
  shopping_list: Array<Ingredient>;

  @Prop()
  favourites: string;


}

export const UserSchema = SchemaFactory.createForClass(User);

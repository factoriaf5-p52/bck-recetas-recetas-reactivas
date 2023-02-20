import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BadgeDocument = Badge & Document
@Schema()
export class Badge {
    @Prop()
  name: string;

    @Prop()
  description: string;

    @Prop()
  requirements: Array<string>;
}

export const BadgeSchema = SchemaFactory.createForClass(Badge);
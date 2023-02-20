import { ObjectId } from "mongoose";

export interface IngredientItf {
    _id: ObjectId;
    name: string;
    measure_unit: string;
    quantity: number;
}

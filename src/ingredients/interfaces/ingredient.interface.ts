import { ObjectId } from "mongoose";

export interface Ingredient {
    ingredientId: ObjectId;
    name: string;
    amount: number;
    measure_unit: string;
}

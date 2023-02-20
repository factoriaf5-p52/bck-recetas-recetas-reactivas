import { ObjectId } from "mongoose";

export interface Recipe {
    recipeId: ObjectId;
    title: string;
    description: number;
    photo: string;
    tags: Array<string>
}

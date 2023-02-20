import { ObjectId } from "mongoose";

export interface Recipe {
    recipeId: ObjectId;
    title: string;
    description: string;
    photo: string;
    tags: Array<string>
    author: ObjectId;
}
import { ObjectId } from "mongoose";

export interface Menu {
    menuId: ObjectId;
    title: string;
    description: string;
    type: string;
    user: ObjectId;
    recipes:  Array <any>;
}
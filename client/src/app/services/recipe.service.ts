import { Injectable } from '@angular/core';
import {RecipeDocument} from '../models/models';
import {db, dbId, recipeCollectionId} from '../appwrite';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: RecipeDocument[] = [];

  constructor() {

  }

  async updateRecipes() {
    this.recipes = await this.getRecipes();
  }

  async getRecipe(id: string): Promise<RecipeDocument> {
    return await db.getDocument(dbId, recipeCollectionId, id) as RecipeDocument;
  }

  async getRecipes() {
    return (await db.listDocuments(dbId, recipeCollectionId)).documents as RecipeDocument[];
  }
}

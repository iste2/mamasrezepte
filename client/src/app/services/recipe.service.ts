import { Injectable } from '@angular/core';
import {Recipe} from '../models/models';
import {db, dbId, recipeCollectionId} from '../appwrite';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [];

  constructor() {

  }

  async updateRecipes() {
    this.recipes = await this.getRecipes();
  }

  async getRecipe(id: string): Promise<Recipe> {
    return await db.getDocument(dbId, recipeCollectionId, id) as Recipe;
  }

  async getRecipes() {
    return (await db.listDocuments(dbId, recipeCollectionId)).documents as Recipe[];
  }
}

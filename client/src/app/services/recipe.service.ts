import { Injectable } from '@angular/core';
import {Recipe, RecipeDocument} from '../models/models';
import {db, dbId, recipeCollectionId} from '../appwrite';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: RecipeDocument[] = [];

  async updateRecipes() {
    this.recipes = await this.getRecipes();
  }

  async getRecipe(id: string): Promise<RecipeDocument> {
    return await db.getDocument(dbId, recipeCollectionId, id) as RecipeDocument;
  }

  async getRecipes() {
    return (await db.listDocuments(dbId, recipeCollectionId)).documents as RecipeDocument[];
  }

  async upsertRecipe(recipe: Recipe, id?: string): Promise<RecipeDocument> {
    const recipeConstructed: Recipe = {
      title: recipe.title,
      description: recipe.description,
      tags: recipe.tags,
    };
    if (id) return await db.updateDocument(dbId, recipeCollectionId, id, recipeConstructed);
    else return await db.createDocument(dbId, recipeCollectionId, "unique()", recipeConstructed);
  }
}

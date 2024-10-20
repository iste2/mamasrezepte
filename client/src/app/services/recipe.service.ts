import { Injectable } from '@angular/core';
import {Recipe, RecipeDocument} from '../models/models';
import {db, dbId, recipeCollectionId} from '../appwrite';
import {Query} from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: RecipeDocument[] = [];

  async updateRecipes(search = "", tags: string[] = []) {
    this.recipes = await this.getRecipesSearched(search, tags);
  }

  async getRecipe(id: string): Promise<RecipeDocument> {
    return await db.getDocument(dbId, recipeCollectionId, id) as RecipeDocument;
  }

  async getRecipesSearched(search: string, tags: string[]): Promise<RecipeDocument[]> {
    const queries = [];
    if(search) queries.push(Query.search("title", search));
    if(tags.length) queries.push(Query.contains("tags", tags));

    return (await db.listDocuments(
      dbId,
      recipeCollectionId,
      queries))
      .documents as RecipeDocument[];
  }

  async upsertRecipe(recipe: Recipe, id?: string): Promise<RecipeDocument> {
    const recipeConstructed: Recipe = {
      title: recipe.title,
      description: recipe.description,
      tags: recipe.tags,
      images: recipe.images
    };
    if (id) return await db.updateDocument(dbId, recipeCollectionId, id, recipeConstructed);
    else return await db.createDocument(dbId, recipeCollectionId, "unique()", recipeConstructed);
  }

  async deleteRecipe(id: string): Promise<void> {
    await db.deleteDocument(dbId, recipeCollectionId, id);
  }
}

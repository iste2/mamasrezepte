import { Injectable } from '@angular/core';
import {db, dbId, recipeCollectionId} from '../appwrite';
import {RecipeDocument} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tags: string[] = [];

  async getTags() {
    let tags: string[] = [];
    ((await db.listDocuments(dbId, recipeCollectionId)).documents as RecipeDocument[])
      .forEach(recipe => tags = tags.concat(recipe.tags));
    return new Set(tags);
  }

  async updateTags() {
    this.tags = Array.from(await this.getTags()).sort();
  }
}

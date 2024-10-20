import {Models} from 'appwrite';

export type Recipe = {
  title: string;
  description: string;
  tags: string[];
}

export type RecipeDocument = Recipe & Models.Document;

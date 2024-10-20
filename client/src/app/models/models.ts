import {Models} from 'appwrite';

export interface Recipe {
  title: string;
  description: string;
  tags: string[];
  images: string[];
}

export type RecipeDocument = Recipe & Models.Document;

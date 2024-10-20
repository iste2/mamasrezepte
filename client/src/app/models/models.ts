import {Models} from 'appwrite';

export type Recipe = {
  title: string;
  description: string;
} & Models.Document;

import { Model } from "mongoose";

export type IBook = {
  title: string;
  imageUrl: string;
  author: string;
  genre: string;
  authorId: string;
  reviews?: string[]; 
};

export const bookSearchableFields = [
  'title',
  'author',
  'genre',
]

export const bookFilterableFields = [
  'searchTerm',
  'genre',

]

export const paginationFields = ['page', 'limit', 'sortBy', 'sortOrder']


export type IBookFilters = {
  searchTerm?: string
  genre?: string
  publicationYear?: number
}


export type BookModel = Model<IBook, {}>;
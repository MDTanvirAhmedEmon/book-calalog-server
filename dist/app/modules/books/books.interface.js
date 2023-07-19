"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationFields = exports.bookFilterableFields = exports.bookSearchableFields = void 0;
exports.bookSearchableFields = [
    'title',
    'author',
    'genre',
];
exports.bookFilterableFields = [
    'searchTerm',
    'genre',
];
exports.paginationFields = ['page', 'limit', 'sortBy', 'sortOrder'];

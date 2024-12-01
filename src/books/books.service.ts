import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { AuthorsService } from '../authors/authors.service';

@Injectable()
export class BooksService {
  private books: Book[] = [
    { id: 1, title: '1984', description: 'Dystopian novel', author: this.authorsService.findOne(1) },
    { id: 2, title: 'Harry Potter', description: 'Fantasy novel', author: this.authorsService.findOne(2) },
  ];

  constructor(private readonly authorsService: AuthorsService) {}

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    return this.books.find(book => book.id === id);
  }
}
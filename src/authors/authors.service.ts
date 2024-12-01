import { Injectable } from '@nestjs/common';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  private authors: Author[] = [
    { id: 1, name: 'George Orwell', bio: 'Author of 1984 and Animal Farm' },
    { id: 2, name: 'J.K. Rowling', bio: 'Author of the Harry Potter series' },
  ];

  findAll(): Author[] {
    return this.authors;
  }

  findOne(id: number): Author {
    return this.authors.find(author => author.id === id);
  }
}
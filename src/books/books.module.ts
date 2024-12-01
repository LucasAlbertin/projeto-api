import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { AuthorsModule } from '../authors/authors.module';

@Module({
  imports: [AuthorsModule],  // Importe o módulo dos autores
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
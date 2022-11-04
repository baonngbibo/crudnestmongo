import { Module } from '@nestjs/common';
import { BookService } from './service/book.service';
import { BookController } from './controller/book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}

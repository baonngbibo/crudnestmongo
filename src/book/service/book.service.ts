import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDto } from '../dto/book.dto';
import { Book, BookDocument } from '../schemas/book.schema';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>){}

    async create(createBookDto: BookDto): Promise<Book>{
        const createdBook = new this.bookModel(createBookDto);
        return await createdBook.save()
    }

    async findAll(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }

    async findById(id: number): Promise<Book>{
        return await this.bookModel.findById(id).exec();
    }

    async update(id: number, updateBookDto: BookDto): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id,updateBookDto, {new: true})
    }

    async delete(id: number): Promise<any>{
        return await this.bookModel.findByIdAndRemove(id);
    }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop()
    title: number

    @Prop()
    content: string
}

export const BookSchema = SchemaFactory.createForClass(Book)
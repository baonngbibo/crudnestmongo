import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BookModule,UserModule,
    MongooseModule.forRoot('mongodb+srv://giabao2k:thuyphuong113@cluster0.gnxhrgq.mongodb.net/test'),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bookstore',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Book])
  ],
  controllers: [
    AppController,
    BookController
    ],
  providers: [
    AppService,
    BookService
  ],
})
export class AppModule {}

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";

@Controller('book')
export class BookController {
    
    constructor(private bookService: BookService){

    }

    @Get()
    all(): Book[]{
        return this.bookService.all();
    }

    @Get(':id')
    find(@Param() params): Book {
        return this.bookService.find(params.id)
    }

    @Post()
    create(@Body() book: Book) {
        return this.bookService.create(book)
    }

    @Put()
    update(book: Book): Book {
        return this.bookService.update(book)
    }

    @Delete(':id')
    remove(id: number): Book {
        return this.bookService.remove(id)
    }
    
}
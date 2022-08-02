import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";

@Controller('book')
export class BookController {
    
    constructor(private bookService: BookService){}

    @Get()
    async all(): Promise<Book[]> {
        return this.bookService.all();
    }

    @Get(':id')
    async find(@Param() params): Promise<Book> {
        return this.bookService.find(params.id)
    }

    @Post()
    async create(@Body() book: Book): Promise<Book> {
        return this.bookService.create(book)
    }

    @Put()
    async update(book: Book): Promise<[number, Book[]]>  {
        return this.bookService.update(book)
    }

    @Delete(':id')
    async emove(id: number) {
        return this.bookService.remove(id)
    }
    
}